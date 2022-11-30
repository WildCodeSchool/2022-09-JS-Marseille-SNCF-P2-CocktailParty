

function Cocktail(props) {
 
  return (
  
    <div className="App">
     
     <>
      <button type="button" onClick={props.getDrink}>Get your cocktail</button>
      </>
    </div>
  );
}
export default Cocktail;