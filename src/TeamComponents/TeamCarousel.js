import React from 'react'
import TeamCarouselItem from "./TeamCarouselItem";
import './TeamCarouselStyles.css';

const TeamCarousel = () => {

    const teamInfo = {
        Olesya: {
            name: 'Олеся Казакова',
            profession: 'Монтажер'
        }
    }

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
                        <TeamCarouselItem props={teamInfo.Olesya}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.Olesya}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.Olesya}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.Olesya}/>
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