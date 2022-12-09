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
