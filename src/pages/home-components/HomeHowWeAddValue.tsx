import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaChartLine, FaGlobe, FaAward, FaCogs } from 'react-icons/fa';

const HomeHowWeAddValue: React.FC = () => {
  return (
    <section className="how-we-add-value py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">How We Add Value</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={12} data-aos="fade-up">
            <p className="lead text-center mb-5">
              Bluestone IT Tech LLC helps clients save time and reduce costs through flexible, high-quality IT staffing and consulting solutions.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="value-item">
              <div className="value-icon mb-3">
                <FaCheckCircle />
              </div>
              <h5>Specialized IT Skills Access</h5>
              <p>
                Providing access to specialized IT skills on a project, contract, or long-term basis.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="value-item">
              <div className="value-icon mb-3">
                <FaChartLine />
              </div>
              <h5>Cost Reduction</h5>
              <p>
                Reducing payroll, benefits, and administrative overhead through flexible staffing models.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="value-item">
              <div className="value-icon mb-3">
                <FaGlobe />
              </div>
              <h5>Flexible Delivery Models</h5>
              <p>
                Implementing just-in-time onsite and offshore staffing models for optimal efficiency.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="value-item">
              <div className="value-icon mb-3">
                <FaAward />
              </div>
              <h5>Quality Hiring</h5>
              <p>
                Reducing time-to-hire while improving quality-of-hire through JD-aligned screening.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="500">
            <div className="value-item">
              <div className="value-icon mb-3">
                <FaCogs />
              </div>
              <h5>Centralized Management</h5>
              <p>
                Centralizing and managing IT staffing requirements for better control and consistency.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeHowWeAddValue;