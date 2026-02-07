import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServicesCTA: React.FC = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">
              Let's Build the Right Technology for Your Business
            </h2>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Our Team <FaArrowRight className="ms-2" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesCTA;