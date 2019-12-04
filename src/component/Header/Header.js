import React from 'react';
import "./Header.scss"
import PasswordButton from '../PasswordButton/PasswordButton';

const Header = () =>{
    return (
    <header className="header">
        <p className="title-font">
            QuikNote
        </p>
        <PasswordButton />
    </header>
)
}

export default Header;