import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ServicesIndustries: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Industries We Serve</h2>
            <p className="lead text-muted">
              Delivering specialized solutions across diverse sectors
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {['Healthcare', 'Retail & E-Commerce', 'Banking & Finance', 'Hi-Tech', 'Manufacturing'].map((industry, index) => (
            <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="text-center border-0 shadow-sm h-100 hover-shadow">
                <Card.Body className="p-4">
                  <Card.Title className="h5">{industry}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesIndustries;