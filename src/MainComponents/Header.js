import React from 'react'
import './MainStyles.css'
import {Logo} from './Logo'

const Header = () => {
    return (
        <header className={'header'}>
            <span className={'logo-list'}>
                <img src ='' className={'artek-logo'}/>
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
