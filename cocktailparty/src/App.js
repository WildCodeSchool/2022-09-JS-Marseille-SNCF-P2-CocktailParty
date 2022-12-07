import Header from "./components/header/Header";
import SearchBar from "./components/search/Search";
import "./App.css";
import Cocktail from "./components/Cocktail/Cocktail";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import CocktailList from "./components/CocktailList/CocktailList";
import CocktailCard from "./components/CocktailCard/CocktailCard";

const drinksInitial = [
  {
    strAlcoholic: "Alcoholic",
    strDrink: "Margarita",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",

    strIBA: "Contemporary Classics",
    strImageAttribution: "Cocktailmarler",
    strImageSource:
      "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
    strIngredient1: "Tequila",
    strIngredient2: "Triple sec",
    strIngredient3: "Lime juice",
    strIngredient4: "Salt",
    strIngredient5: null,
    strInstructions:
      "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",

    strMeasure1: "1 1/2 oz ",
    strMeasure2: "1/2 oz ",
    strMeasure3: "1 oz ",
  },
];

function App() {
  const [drinkState, setDrinkState] = useState(drinksInitial);

  const getDrink = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni")

      .then((response) => response.data)

      .then((data) => {
        console.log(data, "test api");
        setDrinkState(data.drinks);
      });
  };
  console.log(drinkState.drinks, "appel drink");

  // useEffect(() => {
  //   getDrink();
  // }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <button type="button" onClick={getDrink}>
        Get your cocktail
      </button>
      <Cocktail />

      <div className="cocktail-grid">
        <CocktailList />
        <CocktailList />
        <CocktailList />
      </div>
      <div className="cocktailCard">
        {drinkState
          // .filter((item) => item.name)
          .map((drink, index) => (
            <CocktailCard
              key={index}
              name={drink.strDrink}
              glass={drink.strGlass}
              picture={drink.strDrinkThumb}
              ingredient={drink.strIngredient1}
              recette={drink.strInstructions}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}

{
  /* <div id="container">
        {contactInfo.map((potatoes, index) => (
<Contact
key={index}
name={potatoes.name}
email={potatoes.email}
phone={potatoes.phone}
isDeletable={potatoes.isDeletable}
/>
        )        
        )}
      </div> */
}
export default App;
