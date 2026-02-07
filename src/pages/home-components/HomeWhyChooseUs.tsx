import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaGlobe, FaHandshake, FaUsers, FaCogs, FaAward } from 'react-icons/fa';

const HomeWhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose-us py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Why Bluestone IT Tech</h2>
            <p className="section-subtitle">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-item">
              <div className="feature-icon mb-3">
                <FaCheckCircle />
              </div>
              <h5>JD-Aligned Candidate Screening</h5>
              <p>
                Rigorous screening process to ensure candidates match job descriptions perfectly.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-item">
              <div className="feature-icon mb-3">
                <FaGlobe />
              </div>
              <h5>Proven Offshore & Onsite Delivery</h5>
              <p>
                Established track record in delivering high-quality IT solutions globally.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-item">
              <div className="feature-icon mb-3">
                <FaHandshake />
              </div>
              <h5>Vendor-Friendly (MSA / NDA Ready)</h5>
              <p>
                Ready to work with prime vendors under standard agreements and NDAs.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-item">
              <div className="feature-icon mb-3">
                <FaUsers />
              </div>
              <h5>Transparent Communication</h5>
              <p>
                Clear, open communication throughout the engagement process.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="500">
            <div className="feature-item">
              <div className="feature-icon mb-3">
                <FaCogs />
              </div>
              <h5>Scalable Engagement Models</h5>
              <p>
                Flexible models that adapt to your changing business needs.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="600">
            <div className="feature-item">
              <div className="feature-icon mb-3">
                <FaAward />
              </div>
              <h5>Long-Term Partnership Focus</h5>
              <p>
                Committed to building lasting relationships for mutual success.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeWhyChooseUs;