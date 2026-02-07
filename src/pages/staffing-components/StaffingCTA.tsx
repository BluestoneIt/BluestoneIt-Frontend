import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const StaffingCTA: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">
              Ready to Build Your Team?
            </h2>
            <p className="lead text-muted mb-4">
              Let's discuss your staffing needs and find the right talent for your projects
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg me-3">
              Get Started <FaArrowRight className="ms-2" />
            </Link>
            <Link to="/vendors" className="btn btn-outline-primary btn-lg">
              For Vendors
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StaffingCTA;