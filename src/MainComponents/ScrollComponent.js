import React from 'react';
import './ScrollStyles.css';
import {PhoneIcon} from "../Icons/PhoneIcon";
import {MailIcon} from "../Icons/MailIcon"; // Подключаем стили

const Scroll = () => {
    return (
        <div className={'container'}>
            <span className='base-container'>
            <span className={'logo-list'}>
                    <img src = './source/logos/artek-logo.png' className={'artek-logo'}/>
                    <img src = './source/logos/vertical-stick.png' className={'stick-logo'}/>
                    <img src = './source/logos/edu-logo.png' className={'edu-logo'}/>
                </span>
            <div className='base-info-container'>
                <span className={'address'}>
                    <img src = './source/icons/point.svg' className={'point-icon'}/>
                    <span className='address-label'>298645, Крым, г. Ялта, пгт. Гурзуф, ул. Ленинградская, д. 41</span>
                </span>
                <span className={'phone-number'}>
                    {/*<PhoneIcon className='phone-icon'/>*/}
                    <span className='phone-block'>
                        <span>
                            <img src='./source/icons/phone.svg' className={'phone-icon'}/>
                        </span>
                        <span className='info-phon'>
                            <span className={'number'}>8 800 600 20 85</span><br/>
                            <span className={'number-info'}>Единый контактный центр</span>
                        </span>
                    </span>
                </span>
                <span className={'email'}>
                        <img src='./source/icons/mail-icon.svg' className={'mail-icon'}/>
                        <span className={'mail'}>center@artek.org</span>
                </span>

            </div>
            <span>
                
            </span>
            </span>

            {/*<div className='img1'></div>*/}

            <div className='divs' id='stop1'>
                <div className='row'>
                    <div className='col-xs-8'>
                        <p>футерфутерфутерфутерфутерфутерфутерфутерфутерфутерфутерфутерфутерфутерфутерфутерфутерфутерфутер</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scroll;
