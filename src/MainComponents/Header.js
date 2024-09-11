import React from 'react'
import './MainStyles.css'
import {Logo} from './Logo'

const Header = () => {
    return (
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
                <li>
                    <a>
                        <span>Новости</span>
                    </a>
                </li>
            </ul>
            </header>
    )
}

export default Header;
