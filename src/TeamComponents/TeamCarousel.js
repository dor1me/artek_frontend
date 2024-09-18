import React from 'react'
import TeamCarouselItem from "./TeamCarouselItem";
import './TeamCarouselStyles.css';

const TeamCarousel = () => {

    const teamInfo = {
        OlesyaK: {
            name: 'Олеся Казакова',
            profession: 'Видеомонтажер',
        },
        KirillCh: {
            name: 'Кирилл Чеботарь',
            profession: 'Видеомонтажер',
        },
        SlavaC: {
            name: 'Слава Цыплухин',
            profession: 'Видеомонтажер',
        },
        EgorV: {
            name: 'Егор Васильев',
            profession: 'Композитор',
        },
        PolinaM: {
            name: 'Полина Мальцева',
            profession: 'Композитор',
        },
        IlyaI: {
            name: 'Илья Иванищев',
            profession: 'Композитор',
        },
        VanyaS: {
            name: 'Ваня Седельников',
            profession: '3D-дизайнер',
        },
        UlyaM: {
            name: 'Юля Михеева',
            profession: '3D-дизайнер',
        },
        EremeyM: {
            name: 'Еремей Москалев',
            profession: '3D-дизайнер',
        },
        PolinaG: {
            name: 'Полина Герасимова',
            profession: 'Геймдизайнер',
        },
        ElyaM: {
            name: 'Эля Муксинова',
            profession: 'Геймдизайнер',
        },
        NastyaT: {
            name: 'Настя Тарасова',
            profession: 'Геймдизайнер',
        },
        KsushaSh: {
            name: 'Ксюша Шакирова',
            profession: 'Аниматор',
        },
        AnyaG: {
            name: 'Аня Герасимова',
            profession: 'Аниматор',
        },
        OlegV: {
            name: 'Олег Варениченко',
            profession: 'Аниматор',
        },
        KatyaB: {
            name: 'Катя Баландина',
            profession: 'Клипмейкер',
        },
        KarinaK: {
            name: 'Карина Купцова',
            profession: 'Клипмейкер',
        },
        GrishaP: {
            name: 'Гриша Пранович',
            profession: 'Клипмейкер',
        },
        KatyaS: {
            name: 'Катя Смирнова',
            profession: 'Веб-дизайнер',
        },
        ArtemP: {
            name: 'Артем Павлов',
            profession: 'Веб-дизайнер',
        },
        PolinaSh: {
            name: 'Полина Шмакова',
            profession: 'Веб-дизайнер',
        },
        VanyaD: {
            name: 'Ваня Дегтярев',
            profession: 'Сценарист',
        },
        NikitaCh: {
            name: 'Никита Чиглинцев',
            profession: 'Сценарист',
        },
        VadimE: {
            name: 'Вадим Елизаров',
            profession: 'Оператор',
        },
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
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                    <div className={'item'}/>
                </div>
                <div aria-hidden="true" className="items marquee">
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.OlesyaK}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.KirillCh}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.SlavaC}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.EgorV}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.PolinaM}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.IlyaI}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.VanyaS}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.UlyaM}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.EremeyM}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.PolinaG}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.ElyaM}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.NastyaT}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.KsushaSh}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.AnyaG}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.OlegV}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.KatyaB}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.KarinaK}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.GrishaP}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.KatyaS}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.ArtemP}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.PolinaSh}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.VanyaD}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.NikitaCh}/>
                    </div>
                    <div className="item">
                        <TeamCarouselItem props={teamInfo.VadimE}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCarousel;