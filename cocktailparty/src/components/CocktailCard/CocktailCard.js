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

