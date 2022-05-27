import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./CardShared.css";

export default function CardShared() {
  const [fruitData, setFruitData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fruits-develhope.herokuapp.com/api"
      );
      const fruitContent = await response.json();
      const fruits = fruitContent.fruits;
      setFruitData(fruits);
    };
    fetchData();
  }, []);
  return (
    <Container>
      <Row>
        {fruitData.map((fruits, i) => (
          <Col key={i} xs={12} md={4} lg={3} className="p-3">
            <Card className="card-container border border-dark ">
              <Card.Img className="img-style" src={fruits.image} />

              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div>
                    <Card.Title>{fruits.name}</Card.Title>
                    <Card.Text>{fruits.genus}</Card.Text>
                  </div>
                  <div>
                    <Card.Text>${fruits.price}</Card.Text>
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
