import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';

const AboutWhatWeDo: React.FC = () => {
  return (
    <section className="journey-section py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5" data-aos="fade-up">
            <div className="journey-icon mb-3">
              <FaUsers />
            </div>
            <h2 className="section-title">What We Deliver</h2>
            <p className="section-subtitle mb-4">
              Comprehensive IT solutions that drive business growth
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="journey-content" data-aos="fade-up" data-aos-delay="100">
              <p className="lead">
                Bluestone IT Tech LLC helps organizations accelerate growth through innovative technology
                solutions, expert consulting, and reliable offshore and onsite delivery models.
              </p>
              <Row className="mt-4">
                <Col md={6} className="mb-3">
                  <div className="journey-point">
                    <h6>✓ Enterprise Solutions</h6>
                    <p>SAP implementation, upgrades, and support services</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="journey-point">
                    <h6>✓ Cloud & DevOps</h6>
                    <p>AWS, Azure, Kubernetes, and automation solutions</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="journey-point">
                    <h6>✓ Data & Analytics</h6>
                    <p>Data pipelines, BI solutions, and advanced analytics</p>
                  </div>
                </Col>
                <Col md={6} className="mb-3">
                  <div className="journey-point">
                    <h6>✓ IT Staffing</h6>
                    <p>Offshore and onsite talent delivery for all technology needs</p>
                  </div>
                </Col>
              </Row>
              <div className="text-center mt-5">
                <Link to="/services" className="btn btn-primary btn-lg me-3">
                  Explore Our Services
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg">
                  Get In Touch
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutWhatWeDo;