import React from 'react';
import './style.css';
import logo  from "../../images/cocktail-logo.png"
import Navbar from './Navbar';

const header = () => {
    return (
        <div className="container">
        <div className='header'>
            <div className="logo">
            <img className="logo" src={logo} alt="logo react" />
            </div>
            <div>
           <h1>Cocktail Party</h1>
           </div>
           <div className="burger">
            <Navbar />
           </div>
        </div>
        </div>
    );
};

export default header;



