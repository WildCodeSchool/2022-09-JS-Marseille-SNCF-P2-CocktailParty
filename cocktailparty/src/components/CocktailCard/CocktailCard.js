import React from "react";
import "./style.css";
import logo from "../../images/logo-api.png";


function CocktailCard ({name, glass, picture, ingredient1, info, recette })  {
  console.log(name,'le name')

  return (
    <article className="cocktailcard">
      <div className="img-container">
      
        <img src={picture} alt={name} />
      </div>
      <div className="cocktail-footer">
      
        <h3>{name}</h3>
      
        <h4>{glass}</h4>
        
        <p>{info}</p>
        
        <p>{ingredient1} </p>
        
        <h3>recette</h3>
        <p>
        {recette}
        </p>
      </div>
    </article>
  );
};

export default CocktailCard;
