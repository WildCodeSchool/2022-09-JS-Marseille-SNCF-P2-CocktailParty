import "./style.css";
import React, { useState } from "react";
import axios from "axios";
import CocktailList from "../CocktailList/CocktailList";

function SearchBar() {
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
            placeholder="ingredients"
            type="text"
            value={query}
            required
          ></input>

          <div className="loop">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
        <button className="btn" onClick={onSubmit}>
          Search
        </button>
        
        </div>
		<div className="cocktail-list">
          {drinks !== [] &&
            drinks.map((drink) => (
              <CocktailList
                key={drink.idDrink}
                name={drink.strDrink}
                picture={drink.strDrinkThumb}
              />
            ))}
      </div>
    </>
  );
}
export default SearchBar;
