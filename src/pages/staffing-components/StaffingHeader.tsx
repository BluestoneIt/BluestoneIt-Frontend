import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const StaffingHeader: React.FC = () => {
  return (
    <section className="page-header">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="page-title" data-aos="fade-up">
              IT Staffing & Talent Solutions
            </h1>
            <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
              Delivering qualified offshore and onsite candidates aligned precisely with your job requirements
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StaffingHeader;