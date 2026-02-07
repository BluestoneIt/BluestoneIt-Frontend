import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutHeader: React.FC = () => {
  return (
    <section className="page-header">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="page-title" data-aos="fade-up">About Bluestone IT Tech LLC</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Committed to delivering high-quality IT solutions that help organizations grow, innovate, and stay competitive
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutHeader;