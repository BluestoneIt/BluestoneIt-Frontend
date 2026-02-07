import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLightbulb } from 'react-icons/fa';

const HomeAboutSnapshot: React.FC = () => {
  return (
    <section className="about-snapshot py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <h2 className="section-title">Who We Are</h2>
            <p className="lead mb-4">
              Bluestone IT Tech LLC is a US-focused IT staffing and technology consulting company delivering reliable, scalable, and high-quality talent solutions. We partner with US clients and prime vendors to support mission-critical business initiatives through skilled IT professionals and proven delivery models.
            </p>
            <p className="mb-4">
              Our expertise spans enterprise platforms, cloud technologies, data engineering, emerging technologies, and end-to-end IT staffing services.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <div className="mb-4">
                  <FaLightbulb style={{ fontSize: '3rem', color: '#667eea' }} />
                </div>
                <h4 className="mb-4">Innovation Driven</h4>
                <p className="text-muted">
                  We combine deep technical expertise with innovative thinking to solve complex business challenges
                  and deliver measurable results for our clients.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeAboutSnapshot;