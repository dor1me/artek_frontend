import React from 'react'

const Header = () => {
    return (
        <div className={'header'}>
            {/*<logo></logo>*/}
            <ul>
                <li>
                    <a src={'/'}>
                        ссылка раз
                    </a>
                </li>
                <li>
                    <a src={'/'}>
                        ссылка два
                    </a>
                </li>
                <li>
                    <a src={'/'}>
                        ссылка три
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header;