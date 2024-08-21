import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ServiceCard = ({ title, description }) => {
  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
