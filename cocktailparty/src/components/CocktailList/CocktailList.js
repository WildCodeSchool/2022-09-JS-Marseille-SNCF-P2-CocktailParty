import React, {useState} from "react";
import "./style.css";
import CocktailCard from '../CocktailCard/CocktailCard'


const CocktailList = ({ name, picture,strInstructions,ingredient,ingredient2,ingredient3,ingredient4,recette }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="cocktailcard">
      <div className="cocktaillist img">
        <img src={picture} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <p>
          <span>{ingredient}</span> <span>{ingredient2}</span>
          <span>{ingredient3}</span> <span>{ingredient4}</span>
        </p>
        <div>
					{show && <CocktailCard strInstructions={recette} />}
          </div>
        <button onClick={() => setShow(!show)}>
						Détails
					</button>
          
      </div>
    </div>
  );
};

export default CocktailList;
