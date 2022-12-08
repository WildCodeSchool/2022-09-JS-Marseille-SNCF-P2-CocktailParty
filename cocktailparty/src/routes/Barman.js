import React from "react";
import Header from "../components/header/Header";
import image from "../images/barman.jpg";
import "./barman.css";
import Footer from "../components/footer/Footer";

function Barman() {
  return (
    <div className="Barman">
      <div className="head">
        <Header />
      </div>
      <div className="flex">
        <div className="barman-container">
          <img className="imagebarman" src={image} alt="barman" />
          <div className="barmanfooter">
            <h2>Choisir son barman</h2>
            <h3>Tom PITT</h3>
            <p>Spécialiste des cocktails à domicile</p>
            <p>Email: tom.Pitt@cocktailparty.fr</p>
            <p>Tel:0606060606</p>
          </div>
        </div>
      </div>
      <button className="btn" type="submit">
        Recherche
      </button>
      <Footer />
    </div>
  );
}

export default Barman;
