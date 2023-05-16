import React from 'react';
import logo from '../images/logo.svg';

export default function Nav() {
    return (
        <nav>
            <img src={logo} className='nav--logo' alt='logo' />

            <ul className='nav--list'>
                <li className='nav--list-element'>Features</li>
                <li className='nav--list-element'>Team</li>
                <li className='nav--list-element'>Sign In</li>
            </ul>
        </nav>
    )
}