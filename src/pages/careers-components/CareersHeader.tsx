import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CareersHeader: React.FC = () => {
  return (
    <section className="page-header">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="page-title" data-aos="fade-up">
              Join Our Team
            </h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Build your career with a company that values innovation, excellence, and growth
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CareersHeader;