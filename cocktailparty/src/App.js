import Header from "./components/header/Header";
import SearchBar from "./components/search/Search";
import "./App.css";
import Cocktail from "./components/Cocktail/Cocktail";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import CocktailList from "./components/CocktailList/CocktailList";
import CocktailCard from "./components/CocktailCard/CocktailCard";

// const drinksInitial = [
//   {
//     strAlcoholic: "Alcoholic",
//     strDrink: "Margarita",
//     strDrinkThumb:
//       "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",

//     strIBA: "Contemporary Classics",
//     strImageAttribution: "Cocktailmarler",
//     strImageSource:
//       "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
//     strIngredient1: "Tequila",
//     strIngredient2: "Triple sec",
//     strIngredient3: "Lime juice",
//     strIngredient4: "Salt",
//     strIngredient5: null,
//     strVideo: null,
//     strInstructions:
//       "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
//   },
  
// ];

function App() {
  // const [drinkState, setDrinkState] = useState(drinksInitial);

  // const getDrink = () => {
  //   axios
  //     .get("www.thecocktaildb.com/api/json/v1/1/random.php")

  //     .then((response) => response.data)

  //     .then((data) => {
  //       console.log(data, "test api");
  //       setDrinkState(data.drinks);
  //     });
  // };
  // console.log(drinkState.drinks, "appel drink");

  // useEffect(() => {
  //   getDrink();
  // }, []);

  return (
    <div className="App">
      <Header />
      <div className="search">
        <SearchBar />
  
      <Footer />
    </div>
    </div>
  );
}
export default App;
