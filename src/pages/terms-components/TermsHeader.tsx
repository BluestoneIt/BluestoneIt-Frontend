import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TermsHeader: React.FC = () => {
  return (
    <section className="page-header">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="page-title" data-aos="fade-up">Terms & Conditions</h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Legal terms governing the use of our services
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TermsHeader;