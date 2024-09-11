import React from 'react';
import {SearchIcon} from "../Icons/SearchIcon";
import {GlassIcon} from "../Icons/GlassIcon";
import {PhoneIcon} from "../Icons/PhoneIcon";
import {MailIcon} from "../Icons/MailIcon";

const HeaderContacts = () => {
    return (
        <span>
            <span className={'search-bling-icons'}>
                <SearchIcon/>
                <GlassIcon/>
            </span>
            <span className={'phone-and-mail'}>
                <span className={'phone-number'}>
                    <PhoneIcon/>
                    <span>
                        <span className={'number'}>8 800 600 20 85</span><br/>
                        <span className={'number-info'}>Единый контактный центр</span>
                    </span>
                </span>
                <span className={'email'}>
                        <MailIcon/>
                <span className={'mail'}>center@artek.org</span>
            </span>
            </span>

        </span>
    )
}

export default HeaderContacts;