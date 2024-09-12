import React from 'react'
import './FooterStyles.css'
import {FooterWave} from "../Waves/FooterWave";
import {GerbIcon} from "../Icons/Gerbcon";

const Footer = () => {
    return (
        <div>
            <FooterWave className={'footer-wave-dark'}/>
            <GerbIcon className={'gerb-icon'}/>
        </div>
    )
}

export default Footer;