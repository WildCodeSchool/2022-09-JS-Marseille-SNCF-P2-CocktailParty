import "./style.css";

function SearchBar(props) {

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
    </div>
  );
}
export default SearchBar;
