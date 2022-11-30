import "./style.css";



const SearchBar = () => (
  <div className="searchbar">
    <form className="form">
      <input
        className="enter"
        type="text"
        id="header-search"
        placeholder="Votre cocktail ou ingrédient.."
        name="searchBar"
      />
      <button className="btn" type="submit">
        Recherche
      </button>
    </form>
  </div>
);
//

export default SearchBar;
