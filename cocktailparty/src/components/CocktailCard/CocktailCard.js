import React from "react";
import "./style.css";

function CocktailCard({
  name,
  glass,
  picture,
  ingredient,
  ingredient2,
  ingredient3,
  ingredient4,
  info,
  recette,
  video
}) {
  console.log(name, "le name");

  return (
    <article className="cocktailcard">
      <div className="img-container">
        <img src={picture} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <p>
          <span>{ingredient}</span> <span>{ingredient2}</span>
          <span>{ingredient3}</span> <span>{ingredient4}</span>
        </p>
        <h3>Instructions</h3>
        <p>{recette}</p>
        <p>{video}</p>
      </div>
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