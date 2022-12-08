import React from "react";
import "./style.css";
import logo from "../../images/logo-api.png";
import image from "../../images/1001cocktails.png";
import image1 from "../../images/facebook-cocktail.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="textfooter">
        <h4>L'abus d'alcool est dangeureux pour la santé!</h4>
        <p>Crée par Nelly, Sandra, Geoffroy</p>
      </div>
      <div className="lien-footer">
        <div>
          <a
            href="https://www.facebook.com/recette.cocktail"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo" src={image1} alt="logo cocktail" />
          </a>
        </div>
        <div>
          <a
            href="https://www.1001cocktails.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo" src={image} alt="logo cocktail" />
          </a>
        </div>
        <div>
          <a
            href="https://www.thecocktaildb.com/api.php"
            target="_blank"
            rel="noreferrer"
          >
            <img className="logo" src={logo} alt="logo api" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
