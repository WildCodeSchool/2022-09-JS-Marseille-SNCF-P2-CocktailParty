import Header from "./components/header/Header";
import SearchBar from "./components/search/Search";
import "./App.css";
import Cocktail from "./components/Cocktail/Cocktail";
import axios from "axios";
import React, { useState } from "react";
import Footer from "./components/footer/Footer";
import CocktailList from "./components/CocktailList/CocktailList";
import CocktailCard from "./components/CocktailCard/CocktailCard";

const firstDrink = {
  strDrink: "name",
  strImageSource:
    "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
  strIngredient1: "Tequila",
};

function App() {
  const [drink, setDrink] = useState(firstDrink);

  const getDrink = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")

      .then((response) => response.data)

      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="App">
      <Header />
      <SearchBar />

      <Cocktail
        strDrink={drink.strDrink}
        strImageSource={drink.strImageSource}
        strIngredient1={drink.strIngredient1}
        getDrink={getDrink}
      />
      <div className="cocktail-grid">
        <CocktailList />
        <CocktailList />
        <CocktailList />
      </div>
      <div className="cocktailCard">
      <CocktailCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
