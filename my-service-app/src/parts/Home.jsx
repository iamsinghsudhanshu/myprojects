import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
function Home() {
  const services = [
    { title: 'Cleaning', description: 'Professional cleaning services for your home or office.' },
    { title: 'Plumbing', description: 'Expert plumbing services for all your needs.' },
    { title: 'Electrical', description: 'Reliable electrical services for your home or business.' }
  ];

  return (
    <Container>
      <Row className="my-4">
        {services.map((service, index) => (
          <Col md={4} key={index}>
            <ServiceCard title={service.title} description={service.description} />
          </Col>
          
        ))}
      </Row>
    </Container>
  );
  }
export default Home;
