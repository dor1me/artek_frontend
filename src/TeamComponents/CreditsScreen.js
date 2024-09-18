import React from 'react'
import TeamCarousel from "./TeamCarousel";

const CreditsScreen = () => {
    return (
        <div className='credits-container'>
            <h1>Создатели</h1>
            <img src='./source/waves/creditsWave_1' className='team-wave-1'/>
            <img src='./source/waves/creditsWave_2' className='team-wave-2'/>
            <TeamCarousel className='team'/>
        </div>
    )

}