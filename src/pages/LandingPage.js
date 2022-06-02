import "./landingPage.css";
import React from "react";
import Logo from "../assets/logo.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="Container d-flex flex-column vh-100 mw-100 position-relative">
      <div className="row flex-grow-1">
        <div className="col">
          <div className="d-flex">
            <img src={Logo} alt="logo" className="img-logo"></img>
          </div>
        </div>
        <div className="col lemons"></div>
      </div>
      <div className="row flex-grow-1">
        <div className="col berries"></div>
        <div className="col d-flex flex-column justify-content-center align-items-center text-center">
          <div className="w-50">
            <h3>
              Vuoi avere i migliori frutti a casa tua? Contatta il nostro shop
            </h3>
            <Link to={'./homepage'}>
              <button className="w-50 m-3 p-3 btn">Vai allo Shop</button>
            </Link>
            

          </div>
        </div>
      </div>
      <div>
        <img src={Logo} alt="logo" className="img-logo-center"></img>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
