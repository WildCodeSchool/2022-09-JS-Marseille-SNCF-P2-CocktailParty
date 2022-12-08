import React from "react";
import "./style.css";
import logo from "../../images/logo-api.png";

const CocktailList = ({name, picture}) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={picture} alt={name}/>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <button className="button">DETAILS</button>
      </div>
    </article>
  );
};

export default CocktailList;
