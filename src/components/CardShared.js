import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./CardShared.css";
import { useFetchData } from "../Hooks/useFetchData";

export function CardShared() {
  const [data, load, error] = useFetchData();

  return (
    <Container>
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
                    <Button className="button-style w-50 ">Dettagli</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
