import "./landingPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React from "react";
import Lemons from "../assets/lemons-lp.png";
import Berries from "../assets/berries-lp.png";
import Logo from "../assets/logo.png";

const LandingPage = () => {
  return (
    <Container className="d-flex flex-column vh-100 mw-100 position-relative">
      <Row className="flex-grow-1">
        <Col>
          <div className="d-flex">
            <img src={Logo} alt="logo" className="img-logo"></img>
          </div>
        </Col>
        <Col
          style={{ backgroundImage: `url(${Lemons})`, backgroundSize: "cover" }}
        ></Col>
      </Row>
      <Row className="flex-grow-1">
        <Col
          style={{
            backgroundImage: `url(${Berries})`,
            backgroundSize: "cover",
          }}
        ></Col>
        <Col className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="w-50">
            <h3>
              Vuoi avere i migliori frutti a casa tua? Contatta il nostro shop
            </h3>
            <Button
              className="w-50 m-3 p-3"
              style={{
                backgroundColor: "#FF6464",
                border: "1px solid #FF6464",
              }}
            >
              Vai allo shop
            </Button>
          </div>
        </Col>
      </Row>
      <div>
         <img src={Logo} alt="logo" className="img-logo-center"></img>
      </div>
    </Container>
  );
};

export default LandingPage;
