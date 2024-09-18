import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function AudagGame({gameName}) {

    const { unityProvider } = useUnityContext({
        loaderUrl: `./unity/Build/audag.loader.js`,
        dataUrl: `./unity/Build/audag.data`,
        frameworkUrl: `./unity/Build/audag.framework.js`,
        codeUrl: `./unity/Build/audag.wasm`,
    });

    return (
        <div style={{width:1366}}>
            <Unity
                unityProvider={unityProvider}
                style={{height: 768, width: 1366}}
            />
        </div>
    );

}

export default AudagGame;