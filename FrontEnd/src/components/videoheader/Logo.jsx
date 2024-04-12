import React from 'react'
import { SiTravisci } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Logo = ({ toggleMenu }) => {
    return (
        <h1 className='header__logo'>
            <Link to='/' onClick={toggleMenu}>
                <em><SiTravisci /></em>
                <span>My<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo