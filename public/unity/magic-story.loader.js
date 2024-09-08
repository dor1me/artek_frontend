function createUnityInstance(canvas, config, dataCallback) {
    // Helper function to log messages based on type
    const log = (message, type) => {
        if (!log.aborted && config.showBanner) {
            if (type === "error") log.aborted = true;
            config.showBanner(message, type);
        } else {
            switch (type) {
                case "error":
                    console.error(message);
                    break;
                case "warning":
                    console.warn(message);
                    break;
                default:
                    console.log(message);
            }
        }
    };

    // Error handler function
    const errorHandler = (error) => {
        const reason = error.reason || error.error;
        const message = reason ? reason.toString() : error.message || error.reason || "";
        const stack = reason && reason.stack ? reason.stack.toString() : "";
        const formattedError = `${message}\n${stack.startsWith(message) ? stack.substring(message.length) : stack}`.trim();

        if (formattedError && config.stackTraceRegExp && config.stackTraceRegExp.test(formattedError)) {
            displayError(formattedError, error.filename || (reason && (reason.fileName || reason.sourceURL)) || "", error.lineno || (reason && (reason.lineNumber || reason.line)) || 0);
        }
    };

    // Function to display errors
    const displayError = (error, fileName, lineNumber) => {
        if (!displayError.didShowErrorMessage) {
            let message = `An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n${error}`;
            if (error.includes("DISABLE_EXCEPTION_CATCHING")) {
                message = "An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.";
            } else if (error.includes("Cannot enlarge memory arrays")) {
                message = "Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.";
            } else if (["Invalid array buffer length", "Invalid typed array length", "out of memory", "could not allocate memory"].some(text => error.includes(text))) {
                message = "The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings.";
            }
            alert(message);
            displayError.didShowErrorMessage = true;
        }
    };

    // Function to handle file location
    const locateFile = (file) => file === "build.wasm" ? config.codeUrl : file;

    // Initialize configuration
    const defaults = {
        canvas,
        webglContextAttributes: { preserveDrawingBuffer: false, powerPreference: 2 },
        cacheControl: (url) => url === config.dataUrl ? "must-revalidate" : "no-store",
        streamingAssetsUrl: "StreamingAssets",
        downloadProgress: {},
        deinitializers: [],
        intervals: {},
        setInterval: (callback, delay) => {
            const id = window.setInterval(callback, delay);
            defaults.intervals[id] = true;
            return id;
        },
        clearInterval: (id) => {
            delete defaults.intervals[id];
            window.clearInterval(id);
        },
        preRun: [],
        postRun: [],
        print: (message) => console.log(message),
        printErr: (message) => {
            console.error(message);
            if (typeof message === "string" && message.includes("wasm streaming compile failed")) {
                const isMimeError = message.toLowerCase().includes("mime");
                log(
                    `HTTP Response Header "Content-Type" configured incorrectly on the server for file ${config.codeUrl} , should be "application/wasm". Startup time performance will suffer.`,
                    isMimeError ? "warning" : "error"
                );
            } else {
                log(
                    `WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file ${config.codeUrl}, but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.`,
                    "warning"
                );
            }
        },
        locateFile,
        disabledCanvasEvents: ["contextmenu", "dragstart"]
    };

    // Merge user configuration with defaults
    Object.keys(config).forEach((key) => {
        defaults[key] = config[key];
    });

    defaults.streamingAssetsUrl = new URL(defaults.streamingAssetsUrl, document.URL).href;

    // Setup event listeners
    const disabledEvents = defaults.disabledCanvasEvents.slice();
    const preventDefault = (event) => event.preventDefault();
    disabledEvents.forEach((event) => canvas.addEventListener(event, preventDefault));
    window.addEventListener("error", errorHandler);
    window.addEventListener("unhandledrejection", errorHandler);

    // Cleanup function
    defaults.deinitializers.push(() => {
        disabledEvents.forEach((event) => canvas.removeEventListener(event, preventDefault));
        window.removeEventListener("error", errorHandler);
        window.removeEventListener("unhandledrejection", errorHandler);
        Object.keys(defaults.intervals).forEach((id) => window.clearInterval(id));
        defaults.intervals = {};
    });

    // Quit cleanup function
    defaults.QuitCleanup = () => {
        defaults.deinitializers.forEach((fn) => fn());
        defaults.deinitializers = [];
        if (typeof defaults.onQuit === "function") defaults.onQuit();
    };

    // Fullscreen handling
    let width = "", height = "";
    document.addEventListener("webkitfullscreenchange", (event) => {
        if (document.webkitCurrentFullScreenElement === canvas) {
            if (canvas.style.width) {
                width = canvas.style.width;
                height = canvas.style.height;
                canvas.style.width = "100%";
                canvas.style.height = "100%";
            }
        } else {
            if (width) {
                canvas.style.width = width;
                canvas.style.height = height;
                width = height = "";
            }
        }
    });

    const unityInstance = {
        Module: defaults,
        SetFullscreen: () => {
            if (defaults.SetFullscreen) {
                defaults.SetFullscreen.apply(defaults, arguments);
            } else {
                defaults.print("Failed to set Fullscreen mode: Player not loaded yet.");
            }
        },
        SendMessage: () => {
            if (defaults.SendMessage) {
                defaults.SendMessage.apply(defaults, arguments);
            } else {
                defaults.print("Failed to execute SendMessage: Player not loaded yet.");
            }
        },
        Quit: () => new Promise((resolve, reject) => {
            defaults.shouldQuit = true;
            defaults.onQuit = resolve;
        })
    };

    // System info
    defaults.SystemInfo = (() => {
        const userAgent = navigator.userAgent + " ";
        const browsers = [
            ["Firefox", "Firefox"],
            ["OPR", "Opera"],
            ["Edg", "Edge"],
            ["SamsungBrowser", "Samsung Browser"],
            ["Trident", "Internet Explorer"],
            ["MSIE", "Internet Explorer"],
            ["Chrome", "Chrome"],
            ["CriOS", "Chrome on iOS Safari"],
            ["FxiOS", "Firefox on iOS Safari"],
            ["Safari", "Safari"]
        ];
        let browser = "Unknown browser";
        let browserVersion = "Unknown version";
        let os = "Unknown OS";
        let osVersion = "Unknown OS Version";
        let gpu = "Unknown GPU";

        const detectBrowser = () => {
            for (const [key, name] of browsers) {
                const match = new RegExp(`${key}[/ ](.*?)[ \\)]`, "i").exec(userAgent);
                if (match) {
                    browser = name;
                    browserVersion = match[1];
                    if (name === "Safari") {
                        const versionMatch = new RegExp("Version/(.*?) ", "i").exec(userAgent);
                        if (versionMatch) browserVersion = versionMatch[1];
                    }
                    if (name === "Internet Explorer") {
                        const ieVersion = new RegExp("rv:(.*?)\\)? ", "i").exec(userAgent);
                        if (ieVersion) browserVersion = ieVersion[1];
                    }
                    break;
                }
            }
        };

        const detectOS = () => {
            const osPatterns = [
                ["Windows (.*?)[;)]", "Windows"],
                ["Android ([0-9_.]+)", "Android"],
                ["iPhone OS ([0-9_]+)", "iOS"],
                ["Mac OS X ([0-9_.]+)", "Mac OS X"],
                ["Linux", "Linux"]
            ];
            for (const [pattern, name] of osPatterns) {
                const match = new RegExp(pattern).exec(userAgent);
                if (match) {
                    os = name;
                    osVersion = match[1];
                    break;
                }
            }
        };

        const detectGPU = () => {
            const canvas = document.createElement("canvas");
            const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            if (gl) {
                const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
                if (debugInfo) {
                    gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                }
            }
        };

        detectBrowser();
        detectOS();
        detectGPU();

        return {
            Browser: browser,
            BrowserVersion: browserVersion,
            OS: os,
            OSVersion: osVersion,
            GPU: gpu
        };
    })();

    // Return Unity instance
    return unityInstance;
}
