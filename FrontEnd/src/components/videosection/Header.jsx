import React, { useState } from 'react'
import Logo from '../videoheader/Logo'
import Menu from '../videoheader/Menu'
import Sns from '../videoheader/Sns'

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = (e) => {
        e.preventDefault();
        setIsMenuActive(!isMenuActive);
    }

    return (
        <header id='video_header' className={isMenuActive ? 'show' : ''} role='banner'>
            <Logo toggleMenu={toggleMenu} />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header