import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactHeader: React.FC = () => {
  return (
    <section className="page-header">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="page-title" data-aos="fade-up">Contact Us</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Let's discuss your project and bring your ideas to life
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactHeader;