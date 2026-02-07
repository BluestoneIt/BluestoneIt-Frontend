import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeHero: React.FC = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              End-to-End IT Staffing & Technology Solutions for US Businesses
            </h1>
            <p className="hero-description lead">
              We deliver JD-aligned onsite and offshore IT consultants for US clients and prime vendors<br />
              across SAP, Workday, Oracle, Java, Microsoft Power Platform, Azure, Dynamics 365, AI/ML, Data, Cloud, DevOps, and Application Development.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg me-3 mb-3">
                Request Candidates
              </Link>
              <Link to="/services" className="btn btn-outline-primary btn-lg mb-3">
                Our Services
              </Link>
            </div>
          </Col>
          <Col lg={6} className="hero-image" data-aos="fade-left">
            <div className="hero-image-container">
              <img
                src="/BluestoneUpdateLogoITTech.png"
                alt="Bluestone IT Tech LLC"
                className="img-fluid rounded-3 shadow hero-logo-image"
                style={{ marginTop: '-10px', objectFit: 'cover', borderRadius: '50%', backgroundColor: '#f1f1f1' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeHero;