import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGlobe, FaCheckCircle, FaShieldAlt, FaAward } from 'react-icons/fa';

const HomeTrustBar: React.FC = () => {
  return (
    <section className="trust-bar py-4 bg-light">
      <Container>
        <Row className="text-center">
          <Col lg={3} md={6} className="mb-3 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
            <FaGlobe className="trust-icon mb-2" />
            <h6 className="mb-0">Offshore & Onsite Delivery</h6>
          </Col>
          <Col lg={3} md={6} className="mb-3 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
            <FaCheckCircle className="trust-icon mb-2" />
            <h6 className="mb-0">JD-Aligned Screening</h6>
          </Col>
          <Col lg={3} md={6} className="mb-3 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
            <FaShieldAlt className="trust-icon mb-2" />
            <h6 className="mb-0">MSA / NDA Ready</h6>
          </Col>
          <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="400">
            <FaAward className="trust-icon mb-2" />
            <h6 className="mb-0">US Market Experience</h6>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeTrustBar;