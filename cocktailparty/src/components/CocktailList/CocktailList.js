import React from 'react';
import './style.css';
import logo from '../../images/logo-api.png'

const CocktailList = () => {
    return (
        <article className="cocktail">
      <div className="img-container">
        <img src={logo} />
      </div>
      <div className="cocktail-footer">
        <h3>margarita</h3>
        <h4>verres</h4>
        <p>info</p>
        <button className='button'>DETAILS</button>
      </div>
    </article>
    
    );
};

export default CocktailList;