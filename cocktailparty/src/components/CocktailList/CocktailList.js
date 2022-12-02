import React from "react";
import "./style.css";
import logo from "../../images/logo-api.png";

const CocktailList = () => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={logo} alt=''/>
      </div>
      <div className="cocktail-footer">
        {/* strDrink */}
        <h3>margarita</h3>
        {/* strGlass */}
        <h4>verres</h4>
        {/* strIBA */}
        <p>info</p>
        <button className="button">DETAILS</button>
      </div>
    </article>
  );
};

export default CocktailList;
