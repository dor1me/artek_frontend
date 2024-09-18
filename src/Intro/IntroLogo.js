import { useContext } from "react";
import { IntroContext } from "./Intro";

const logoStyle = {
    backgroundColor:" red",
    width: "100px",
    height: "100px",
    margin: "50px"
}

const IntroLogo = () => {
    const ctx = useContext(IntroContext);
    
    return ctx.started===false && <img src="logo512.png" style={logoStyle}/>
           
        
    
}

export default IntroLogo;