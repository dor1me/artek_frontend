import { useContext } from "react";
import { IntroContext } from "./Intro";
import './IntroStyles.css';

const IntroStartButton = () => {
    const ctx = useContext(IntroContext);

    const handleStart = (e) => {
        ctx.start();
    }
    return ctx.started===false && <button onClick={handleStart}>
        <span>Старт</span>
        <img src='./source/icons/arrow_outward.svg'/>

    </button>

}

export default IntroStartButton;