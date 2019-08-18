import React from 'react';
import './Logo.css';
import BountifulLogo from './BountifulLogo.png'

function Logo() {
    return <img src={BountifulLogo} style={{"width":"180px", "height":"160px", "float":"left", "margin-top":"6.1%", "margin-left":"1%"}}/>
}

export default Logo;