import React from 'react'
import './MainStyles.css'
import {Logo} from './Logo'
import HeaderContacts from "./HeaderContacts";

const Header = () => {
    return (
        <div className={'header-container'}>
            <div className={'header'}>
            <span className={'logo-list'}>
                <img src = './source/logos/artek-logo.png' className={'artek-logo'}/>
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

                    </li>
                </ul>
                <span className={'contacts'}>
                    <span><img src = './source/logos/news-icon.png' className={'news-icon'}/></span>
                    {/*<HeaderContacts/>*/}
                </span>
            </div>
        </div>
    )
}

export default Header;
