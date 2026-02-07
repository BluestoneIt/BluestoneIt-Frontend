import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ServicesHeader: React.FC = () => {
  return (
    <section className="page-header">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="page-title" data-aos="fade-up">Our Services</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesHeader;