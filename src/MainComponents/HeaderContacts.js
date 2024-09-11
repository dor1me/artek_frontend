import React from 'react';

const HeaderContacts = () => {
    return (
        <span>
            <span className={'search-bling-icons'}>
                <img src = './source/icons/search-icon.png' className={'search-icon'}/>
                <img src = './source/icons/blind-icon.png' className={'blind-icon'}/>
            </span>
            <span className={'phone-and-mail'}>
                <span className={'phone-number'}>
                    <img src = './source/icons/phone-icon.png' className={'phone-icon'}/>
                    <span>
                        <span className={'number'}>8 800 600 20 85</span><br/>
                        <span className={'number-info'}>Единый контактный центр</span>
                    </span>
                </span>
                <span className={'email'}>
                    <span>
                      <img src = './source/icons/mail-icon.png' className={'mail-icon'}/>
                    </span>
                <span className={'mail'}>center@artek.org</span>
            </span>
            </span>

        </span>
    )
}

export default HeaderContacts;