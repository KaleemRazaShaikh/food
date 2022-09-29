import React from "react";
// import { Container } from "react-bootstrap";
import Img from "../../assets/Mobile.png";

import "./home.css";
const Home = () => {
  return (
    <div className="banner">
      <div className="banner-wrapper">
        <h5>Food app</h5>
        <h1>Why stay hungry when you can order form Bella Onojie</h1>
        <p className="app-text">Download the bella onoje’s food app now on</p>
        <div className="banner-button">
          <button type="button" className="button button-1">
            Playstore
          </button>
          <button type="button" className="button button-2">
            App store
          </button>
        </div>
      </div>

      <div className="img-container">
        <img className="banner-img" src={Img} alt="mobile" />
      </div>

      <div className="line"></div>
    </div>
  );
};

export default Home;
