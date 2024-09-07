import React from 'react'
import TeamCarouselItemPhoto from "./TeamCarouselItemPhoto";
import './TeamCarouselStyles.css';

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
                        <TeamCarouselItemPhoto member={'alica'} profession={'animator'}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItemPhoto member={'katya'} profession={'animator'}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItemPhoto member={'dima'} profession={'animator'}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItemPhoto member={'nikita'} profession={'animator'}/>
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