import Button from "react-bootstrap/Button";
import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./CardShared.css";
import "./Modal.css";

const CardShared = ({ data, error, load, handleShow, handleShowEditFruit }) => {
  return (
    <Container className="container">
      <Row>
        {!error && load && <h1>Caricamento dati in corso</h1>}
        {error && <h1>Dati non caricati</h1>}
        {!error &&
          data.map((fruits, i) => (
            <Col key={i} xs={12} md={4} lg={3} className="p-3">
              <Card className="card-container border border-dark border-2 ">
                <Card.Img className="img-style" src={fruits.image} />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div>
                      <Card.Title>{fruits.name}</Card.Title>
                      <Card.Text>{fruits.genus}</Card.Text>
                    </div>
                    <div>
                      <Card.Title>${fruits.price}</Card.Title>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <Button
                      className="btn-primary w-50 "
                      onClick={() => handleShow(fruits)}
                    >
                      Dettagli
                    </Button>
                    <Button
                      className="btn-primary w-50 "
                      onClick={() => handleShowEditFruit(fruits)}
                    >
                      Edit Card
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default CardShared;
