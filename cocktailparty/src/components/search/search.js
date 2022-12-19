import "./style.css";
import React, { useState } from "react";
import axios from "axios";
import CocktailList from "../CocktailList/CocktailList";

function SearchBar(
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
) {
  const [query, setQuery] = useState("");
  const [drinks, setDrinks] = useState([]);

  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

  const searchDrinks = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setDrinks(response.data.drinks);
      setQuery("");
    } catch (e) {
      console.error(e);
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    searchDrinks();
  };

  return (
    <>
      <div className="searchbar">
        <form className="form" onSubmit={onSubmit}>
          <input
            className="enter"
            id="search"
            name="searchValue"
            onChange={onChange}
            placeholder="Recherche"
            type="text"
            value={query}
            required
          ></input>

          <div className="loop">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
        <button className="btn" onClick={onSubmit}>
          Recherche
        </button>
      </div>
      <div className="cocktail-list">
        {!drinks ? (
          <h1 className="drunk">Go home, you're drunk. We can't serve you.</h1>
        ) : (
          drinks.map((drink) => (
            <CocktailList
              key={drink.idDrink}
              name={drink.strDrink}
              picture={drink.strDrinkThumb}
              ingredient={drink.strIngredient1}
              ingredient2={drink.strIngredient2}
              ingredient3={drink.strIngredient3}
              ingredient4={drink.strIngredient4}
              recette={drink.strInstructions}
            />
          ))
        )}
      </div>
    </>
  );
}
export default SearchBar;
