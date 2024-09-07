import React from 'react'
import TeamCarouselItem from "./TeamCarouselItem";

const TeamCarousel = () => {

    return (
        <div className="wrap">
            <div className="items-wrap">
                <div className="items marquee">
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                </div>
                <div aria-hidden="true" className="items marquee">
                    <div className="item">
                        <TeamCarouselItem member={'alica'} profession={'animator'}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem member={'katya'} profession={'animator'}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem member={'dima'} profession={'animator'}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem member={'nikita'} profession={'animator'}/>
                    </div>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                </div>
            </div>
        </div>
    )
}

export default TeamCarousel;