import React from "react";
import "./style.css";

function CocktailCard({ recette }) {
  return (
    <article>
      <p>{recette}</p>
    </article>
  );
}

export default CocktailCard;

// key={drink.idDrink}
// name={drink.strDrink}
// glass={drink.strGlass}
// picture={drink.strDrinkThumb}
// ingredient={drink.strIngredient1}
// ingredient2={drink.strIngredient2}
// ingredient3={drink.strIngredient3}
// ingredient4={drink.strIngredient4}
// recette={drink.strInstructions}
// video={drink.strVideo}
