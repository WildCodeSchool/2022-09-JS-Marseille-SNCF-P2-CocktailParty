import React from "react";
import "./style.css";
import logo from "../../images/logo-api.png";

const CocktailCard = () => {
  return (
    <article className="cocktailcard">
      <div className="image">
        {/* strImageSource */}
        <img src={logo} />
      </div>
      <div className="cocktail-footer">
        {/* strDrink */}
        <h3>margarita</h3>
        {/* strGlass */}
        <h4>verres</h4>
        {/* strIBA */}
        <p>info</p>
        {/* strIngredient  */}
        <p>ingredient</p>
        {/* strInstructions */}
        <h3>recette</h3>
        <p>
          "Rub the rim of the glass with the lime slice to make the salt stick
          to it. Take care to moisten only the outer rim and sprinkle the salt
          on it. The salt should present to the lips of the imbiber and never
          mix into the cocktail. Shake the other ingredients with ice, then
          carefully pour into the glass."
        </p>
      </div>
    </article>
  );
};

export default CocktailCard;
