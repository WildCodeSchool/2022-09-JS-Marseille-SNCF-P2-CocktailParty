import React from 'react';
import './style.css';
import logo from '../../images/logo-api.png'

const Footer = () => {
    return (
        <div className='footer'>
            <p>Crée par Nelly, Sandra, Geoffroy</p>
            <a href="https://www.thecocktaildb.com/api.php" target="_blank">
            <img className='logo' src={logo}/></a>
        </div>
    );
};

export default Footer;