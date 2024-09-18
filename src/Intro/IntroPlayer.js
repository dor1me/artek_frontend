import React, { useContext, useRef, useEffect, useState } from "react";
import { IntroContext } from "./Intro";

const playerStyle = {
    position: "absolute", 
    width: "100%", 
    height:"100vh",
    left: 0,
    top: 0,
    //backgroundColor: "blue",
    //opacity: 0.5,
    overflow: "hidden",
    // background: 'transparent'
    
}

const IntroPlayer = () => {
    const [count, setCount] = useState(0);
    const ctx = useContext(IntroContext);
    const requestRef = useRef();
    const previousTimeRef = useRef();
    const playerRef = useRef();
    
    const animate = time => {
      if (previousTimeRef.current != undefined) {
        const deltaTime = time - previousTimeRef.current;
        setCount(prevCount => (prevCount + deltaTime ) );
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    }

    useEffect(() => {
        if(ctx.started) {
            requestRef.current = requestAnimationFrame(animate);
        }
      
      return () => cancelAnimationFrame(requestRef.current);
    }, [ctx.started]); 

    const handlePlay = (ev) => {
        console.log("play");
        playerRef.current.style.opacity = 0.5;
    }
    const handleFinish = (ev) => {
        console.log("finished");
    }

    if(playerRef.current) {
        const duration = 11500;
        const transition = 2000;
        const opacity = count < duration-transition
            ?1
            :(duration-count)/transition;
        playerRef.current.style.opacity = opacity;
        if(opacity <= 0 ) ctx.onFinish();
    }
    
    
    return ctx.started && (
        <div style={playerStyle} ref={playerRef}>
            <video src='/intro.webm' width={"100%"} autoPlay={true} onPlay={handlePlay}>

            </video>
        </div>
    )
}

export default IntroPlayer;