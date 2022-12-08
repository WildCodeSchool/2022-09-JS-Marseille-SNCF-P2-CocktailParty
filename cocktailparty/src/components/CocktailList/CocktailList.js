import React from "react";
import "./style.css";


const CocktailList = ({ name, picture }) => {
  return (
    <div className="cocktaillist">
      <div className="img-container">
        <img src={picture} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <button className="button">DETAILS</button>
      </div>
    </div>
  );
};

export default CocktailList;
