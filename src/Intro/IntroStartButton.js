import { useContext } from "react";
import { IntroContext } from "./Intro";
const IntroStartButton = () => {
    const ctx = useContext(IntroContext);

    const handleStart = (e) => {
        ctx.start();
    }
    return ctx.started===false && <button onClick={handleStart}>Поехали</button>
}

export default IntroStartButton;