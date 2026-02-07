import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BenchSalesCTA: React.FC = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">
              Ready to Explore Our Bench?
            </h2>
            <p className="lead text-muted mb-4">
              Connect with our bench sales team to discuss your current requirements
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg me-3">
              Contact Us <FaArrowRight className="ms-2" />
            </Link>
            <Link to="/staffing" className="btn btn-outline-primary btn-lg">
              View All Services
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BenchSalesCTA;