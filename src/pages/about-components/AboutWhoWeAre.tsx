import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutWhoWeAre: React.FC = () => {
  return (
    <section className="who-we-are py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4" data-aos="fade-right">
            <h2 className="section-title">Who We Are</h2>
            <p className="lead mb-4">
              <strong>Bluestone IT Tech LLC</strong> is a technology consulting and IT staffing company dedicated to helping organizations build high-performing technology teams. We specialize in sourcing, screening, and placing highly skilled IT professionals who help businesses drive innovation and deliver successful projects.
            </p>
            <p>
              Our team has deep expertise in identifying top technology talent across a wide range of domains including cloud computing, enterprise applications, data engineering, cybersecurity, and software development.
            </p>
            <p>
              At Bluestone IT Tech, we are committed to building long-term partnerships with our clients by delivering quality talent, exceptional service, and measurable results.
            </p>
            <p>
              We partner with prime vendors, system integrators, and direct clients to provide flexible staffing solutions that meet evolving project requirements
            </p>
            <p>
              At Bluestone IT Tech, our focus is simple: <strong>deliver the right talent, at the right time, to help our clients succeed.</strong>
            </p>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <div className="hero-image-container">
              <img
                src="/BluestoneUpdateLogoITTech.png"
                alt="Bluestone IT Tech LLC"
                className="img-fluid rounded-3 shadow hero-logo-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutWhoWeAre;