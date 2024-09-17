import React from 'react';
import './ScrollStyles.css';
import {PhoneIcon} from "../Icons/PhoneIcon";
import {MailIcon} from "../Icons/MailIcon"; // Подключаем стили

const Scroll = () => {
    return (
        <div className={'container'}>
            {/*<div className='img1'></div>*/}

            <div className='divs' id='stop1'>
                <div >
                    <div >

                            <div className='base-container'>
                                <div className={'logo-list'}>
                                        <img src = './source/logos/artek-logo.png' className={'artek-logo'}/>
                                        <img src = './source/logos/vertical-stick.png' className={'stick-logo'}/>
                                        <img src = './source/logos/edu-logo.png' className={'edu-logo'}/>
                                </div>
                                <div className='base-info-container'>
                                    <div className={'address'}>
                                        <img src = './source/icons/point.svg' className={'point-icon'}/>
                                        <span className='address-label'>298645, Крым, г. Ялта, пгт. Гурзуф, ул. Ленинградская, д. 41</span>
                                    </div>
                                    <div className={'phone-number'}>
                                        {/*<PhoneIcon className='phone-icon'/>*/}
                                        <div className='phone-block'>
                                            <span>
                                                <img src='./source/icons/phone.svg' className={'phone-icon'}/>
                                            </span>
                                            <span className='info-phon'>
                                                <span className={'number'}>8 800 600 20 85</span><br/>
                                                <span className={'number-info'}>Единый контактный центр</span>
                                            </span>
                                        </div>
                                    </div>
                                    <span className={'email'}>
                                            <img src='./source/icons/mail-icon.svg' className={'mail-icon'}/>
                                            <span className={'mail'}>center@artek.org</span>
                                    </span>
                                </div>
                                <span>
                                <span className={'social-list'}>
                                        <img src = './source/icons/socials.svg' className={'social-icon'}/>

                                </span>
                                </span>

                            </div>
                            <div className='dop-info'>
                                <img src='./source/icons/Line.svg' className='line-icon'/>
                                <ul>
                                    <li><span className='footer-span'>Ⓒ «Артек», 2024</span></li>
                                    <li><span className='footer-span'>Политика конфиденциальности</span></li>
                                    <li> <span className='footer-span'>Разработано</span> <span>АНО «АртМастерс»</span></li>
                                </ul>
                            </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scroll;
