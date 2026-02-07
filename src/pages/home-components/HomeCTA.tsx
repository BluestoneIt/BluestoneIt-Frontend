import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeCTA: React.FC = () => {
  return (
    <section className="cta-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="cta-title text-white">Let's Build the Right Team for Your Business</h2>
            <p className="cta-description text-white mb-4">
              Whether you need skilled IT consultants or end-to-end staffing support, Bluestone IT Tech LLC is ready to help.
            </p>
            <Link to="/contact" className="btn btn-light btn-lg">
              Contact Our Team
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeCTA;