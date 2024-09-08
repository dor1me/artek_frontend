import React from 'react'
import './MainStyles.css'
import {Logo} from './Logo'

const Header = () => {
    return (
        <header className={'header'}>
            <Logo className={'logo'}/>
            <ul className={'header-list'}>
                <li>
                    <a>
                        <span>первая ссылка</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span>вторая ссылка</span>
                    </a>
                </li>
                <li>
                    <a>
                        <span>третья ссылка</span>
                    </a>
                </li>
            </ul>
            </header>
    )
}

export default Header;
