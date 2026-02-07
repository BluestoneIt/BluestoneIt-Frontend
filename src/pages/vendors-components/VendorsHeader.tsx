import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const VendorsHeader: React.FC = () => {
  return (
    <section className="page-header">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="page-title" data-aos="fade-up">
              Partner With Bluestone IT Tech LLC
            </h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Collaborating with prime vendors, implementation partners, and direct clients across the US IT ecosystem
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VendorsHeader;