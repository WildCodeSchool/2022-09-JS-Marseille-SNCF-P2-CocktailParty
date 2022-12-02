import "./style.css";

const SearchBar = () => (
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
    <button className="btn" type="submit">
      Recherche
    </button>
  </div>
);

export default SearchBar;
