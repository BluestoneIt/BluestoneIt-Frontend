import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeHero: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero-section">
      {/* Full-bleed banner outside the centered container */}
      <div className="hero-banner-wrapper">
        <img src="/BlueEnhance.png" alt="Bluestone banner" className="hero-banner-image" />
      </div>

      <Container>
        {/* Content shown after 10s */}
        <Row className="align-items-center py-5">
          <Col lg={8} className={`hero-content ${visible ? 'hero-content-visible' : 'hero-content-hidden'}`}>
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
              <Link to="/services" className="btn btn-primary btn-lg mb-3">
                Our Services
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeHero;