import { createContext, useState } from "react";
import IntroLogo from "./IntroLogo";
import IntroStartButton from "./IntroStartButton";
import IntroPlayer from "./IntroPlayer";
// import

const introStyle = {
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}

export const IntroContext = createContext({started: false, finished: false, start: ()=>{}, onFinish: ()=> {}});


const Intro = () => {

    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [opacity, setOpacity] = useState(1);

    const handleStart = () => {
        console.log("started");
        setStarted(true);
    }
    const handleFinished = () => {
        console.log("finished");
        setFinished(true);
    }

    const handleOpacity = (value) => {
        setOpacity(value);
    }


    return finished==false && <div style={introStyle}>
        <IntroContext.Provider value={
            { 
                started: started,
                finished: finished, 
                start: handleStart, 
                onFinish: handleFinished,
                setOpacity: handleOpacity
            }}>
            <IntroLogo/>
            <IntroStartButton/>
            <IntroPlayer/>
        </IntroContext.Provider>
        
    </div>

}

export default Intro;