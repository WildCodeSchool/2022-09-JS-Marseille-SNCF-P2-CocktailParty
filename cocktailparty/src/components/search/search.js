import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cocktail from "../Cocktail/Cocktail";

// const SearchBar = () => (
//   <div className="searchbar">
//     <form className="form">
//       <input
//         className="enter"
//         type="text"
//         id="header-search"
//         placeholder="Votre cocktail ou ingrédient.."
//         name="q"
//       />
//       {
//         <div className="loop">
//           <i className="fa-solid fa-magnifying-glass"></i>
//         </div>
//       }
//     </form>
//     <button className="btn" type="submit">
//       Recherche
//     </button>
//   </div>
// );

// export default SearchBar;

function SearchBar(props) {
//   const [drink, setDrink] = useState(false);
//  const handleSearch = () => {
//    setDrink(!drink);
//  };
//   useEffect(() => {
//     axios
//       .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
//       // Extract the DATA from the received response
//       .then((response) => response.data)
//       // Use this data to update the state
//       .then((data) => {
        
//         setDrink(data.results[0]);
//         console.log(data);
//       });
//   });

  
  return (
    <div className="searchbar">
      <form className="form">
        <input
          className="enter"
          type="text"
          id="header-search"
          placeholder="Votre cocktail ou ingrédient.."
          name="q"
        />
        {
          <div className="loop">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        }
      </form>
      <button className="btn" type="submit" onClick={props.getDrink}>
        Recherche 
      </button>
    </div>
  );
}
export default SearchBar;
