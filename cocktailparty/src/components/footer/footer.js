import React from 'react';
import './style.css';
import logo from '../../images/logo-api.png'
import image from '../../images/1001cocktails.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='textfooter'>
            <h4>L'abus d'alcool est dangeureux pour la santé!</h4>
            <p>Crée par Nelly, Sandra, Geoffroy</p>
            </div>
            <div><a href="https://www.1001cocktails.com/" target="_blank" rel="noreferrer">
            <img className='logo' src={image} alt=''/></a></div>
            <div>
            <a href="https://www.thecocktaildb.com/api.php" target="_blank" rel="noreferrer">
            <img className='logo' src={logo} alt=''/></a>
            </div>
        </div>
    );
};

export default Footer;