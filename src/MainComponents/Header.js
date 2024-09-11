import React from 'react'
import './MainStyles.css'
import {Logo} from './Logo'

const Header = () => {
    return (
        <div className={'header-container'}>
            <header className={'header'}>
            <span className={'logo-list'}>
                <img src = './source/logos/artek-logo.png' className={'artek-logo'}/>
                <img src = './source/logos/vertical-stick.png' className={'stick-logo'}/>
                <img src = './source/logos/edu-logo.png' className={'edu-logo'}/>
            </span>
                <ul className={'header-list'}>
                    <li>
                        <a>
                            <span>Сведения об образовательной организации</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Об "Артеке"</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Жизнь "Артека"</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <span>Информация для родителей</span>
                        </a>
                    </li>
                    <li className={'news-item'}>
                            <span>Новости</span>
                            <span><img src = './source/logos/news-icon.png' className={'news-icon'}/></span>
                    </li>
                </ul>
                <span className={'contacts'}>
                    <img src = './source/logos/contacts.png'/>
                </span>
            </header>
        </div>
    )
}

export default Header;
