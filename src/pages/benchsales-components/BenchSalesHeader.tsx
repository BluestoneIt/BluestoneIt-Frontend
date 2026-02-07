import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BenchSalesHeader: React.FC = () => {
  return (
    <section className="page-header">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="page-title" data-aos="fade-up">
              Bench Sales & Candidate Marketing
            </h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Market-ready consultants available for immediate deployment on offshore and onsite projects
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BenchSalesHeader;