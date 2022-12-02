import React from "react";
import Navbar from "../components/header/Navbar";
import image from "../images/barman.jpg";
import './barman.css';

function Barman() {
  return (
    <div className="Barman">
      <h1>Chercher un Barman</h1>
      <div className="nav-header">
        <Navbar />
      </div>
<div className="flex">
      <div className="barman-container">
        <img className="imagebarman" src={image} alt="" />
        <div className="barmanfooter">
        <h2>Choisir son barman</h2>
        <h3>Tom cruise</h3>
        <p>Spécialiste des cocktails à domicile</p>
        <p>Email</p>
        <p>Tel:0606060606</p>
        </div>
        
      </div>
      
    </div>
    <button className="btn" type="submit">
      Recherche
    </button>
    </div>
  );
}

export default Barman;
