import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CocktailCard from "../CocktailCard/CocktailCard";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


function SearchBar() {
const [datas, setDatas] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
axios
.get(`${url}${searchTerm}`)
.then((response) => response.data)
.then((data) => {
  setDatas(data);
  console.log(data, "super data");
});
},[]);

const handleSearchTerm = (e) => {
  let value = e.target.value;
  value.length > 2 && setSearchTerm(value);
};

console.log(searchTerm, "search terme");

  return (
    <>
    <div className="searchbar">
      <form className="form">
        <input
          className="enter"
          type="text"
          id="searchBar"
          placeholder="Votre cocktail ou ingrédient.."
            name="searchBar"
            onChange={handleSearchTerm}
        />
        {
          <div className="loop">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        }
      </form>
      
        <div className="search_results">
          
          {datas?.drinks?.filter((val) => {
            return val.toLowerCase().includes(searchTerm.toLowerCase());
            console.log(datas.drinks, "potatoes");
          })}
          
            
        
             
                
              </div>           
        
      </div>
     
  </>
  );
}
export default SearchBar;
