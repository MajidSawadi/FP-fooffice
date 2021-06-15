import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import banner from "../assests/images/banner3.jpg";
import "./Acard.css";
const Acard = () => {
  return (
    <div>
      <Card className="card">
        <Card.Img variant="top" src={banner} />
        <Card.Body>
          <Card.Title>Top Office</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className="card__button">
            Check Availability
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Acard;
