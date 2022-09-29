import React from "react";
import "./account.css";
import Img from "../../assets/Rectangle.png";
import Img2 from "../../assets/Rectangle-1.png";
import Img3 from "../../assets/Rectangle-2.png";
import { Container } from "react-bootstrap";

function Account() {
  return (
    <div>
      <div className="container1">
        <h1 className="acc-text">How the app works</h1>
        <Container>
          <div className="acc-container">
            <div className="left">
              <img className="acc-img" src={Img} alt="mobile" />
            </div>

            <div className="right">
              <a className="create-acc" href="/">
                Create an account
              </a>
              <h2 className="acc-creation-text">
                Create/login to an existing account to get started
              </h2>
              <p className="acc-para">
                An account is created with your email and a desired password
              </p>
            </div>
          </div>
        </Container>

        <Container>
          <div className="acc-container">
            <div className="right another-right">
              <a className="create-acc" href="/">
                Create an account
              </a>
              <h2 className="acc-creation-text">
                Create/login to an existing account to get started
              </h2>
              <p className="acc-para">
                An account is created with your email and a desired password
              </p>
            </div>
            <div className="left">
              <img className="acc-img" src={Img2} alt="mobile" />
            </div>
          </div>
        </Container>

        <Container>
          <div className="acc-container">
            <div className="left">
              <img className="acc-img" src={Img3} alt="mobile" />
            </div>

            <div className="right">
              <a className="create-acc" href="/">
                Create an account
              </a>
              <h2 className="acc-creation-text">
                Create/login to an existing account to get started
              </h2>
              <p className="acc-para">
                An account is created with your email and a desired password
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Account;
