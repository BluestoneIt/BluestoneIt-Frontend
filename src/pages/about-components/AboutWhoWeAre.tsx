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
              <strong>Bluestone IT Tech LLC</strong> is committed to delivering high-quality IT solutions
              that help organizations grow, innovate, and stay competitive in a rapidly evolving digital world.
            </p>
            <p>
              We are a technology consulting firm delivering scalable and secure IT solutions to global
              clients across multiple industries. Our expertise spans SAP, Cloud, DevOps, Data Engineering,
              Application Development, and IT Staffing.
            </p>
            <p>
              We help organizations accelerate growth through innovative technology solutions, expert consulting,
              and reliable offshore and onsite delivery models. Our team comprises certified specialists with
              deep industry knowledge and proven expertise.
            </p>
            <p>
              It is no coincidence that the name <strong>Bluestone IT Tech LLC</strong> has become
              synonymous with quality and committed service delivery of technology solutions to our valued clients.
            </p>
          </Col>
          <Col lg={6} data-aos="fade-left">
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

export default AboutWhoWeAre;