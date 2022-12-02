import React from "react";
import "./style.css";
import logo from "../../images/logo-api.png";

const CocktailCard = () => {
  return (
    <article className="cocktailcard">
      <div className="img-container">
        {/* strImageSource */}
        <img src={logo} alt="" />
      </div>
      <div className="cocktail-footer">
        {/* strDrink */}
        <h3>margarita</h3>
        {/* strGlass */}
        <h4>Cocktail glass</h4>
        {/* strIBA */}
        <p>Contemporary Classics</p>
        {/* strIngredient1  strIngredient2 strIngredient3 strIngredient4 */}
        <p>Tequila, Triple sec, Lime juice, Salt</p>
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
