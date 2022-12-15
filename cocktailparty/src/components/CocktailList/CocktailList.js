import React, {useState} from "react";
import "./style.css";
import CocktailCard from '../CocktailCard/CocktailCard'


const CocktailList = ({ name, picture,strInstructions }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="cocktaillist">
      <div className="img-container">
        <img src={picture} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <button onClick={() => setShow(!show)}>
						Détails
					</button>
          <div>
					{show && <CocktailCard strInstructions={strInstructions} />}
          </div>
      </div>
    </div>
  );
};

export default CocktailList;
