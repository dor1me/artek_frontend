import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function AudagGame({gameName}) {

    const { unityProvider } = useUnityContext({
        loaderUrl: `./unity/Build/magic-story.loader.js`,
        dataUrl: `./unity/Build/magic-story.data`,
        frameworkUrl: `./unity/Build/magic-story.framework.js`,
        codeUrl: `./unity/Build/magic-story.wasm`,
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