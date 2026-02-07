import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaBullseye, FaEye, FaCheckCircle } from 'react-icons/fa';

const AboutMissionVision: React.FC = () => {
  return (
    <section className="mission-section py-5">
      <Container>
        <Row>
          <Col lg={6} className="mb-4" data-aos="fade-right">
            <Card className="h-100 border-0 shadow-lg">
              <Card.Body className="p-5">
                <div className="mission-icon mb-3">
                  <FaBullseye />
                </div>
                <h2 className="section-title">Mission</h2>
                <p className="lead">
                  Empower businesses with reliable, scalable, and future-ready technology solutions.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-3">
                    <FaCheckCircle className="text-success me-2" />
                    Help clients achieve critical business objectives
                  </li>
                  <li className="mb-3">
                    <FaCheckCircle className="text-success me-2" />
                    Set new standards in IT project delivery & service
                  </li>
                  <li className="mb-3">
                    <FaCheckCircle className="text-success me-2" />
                    Transform operations through strategic technology implementation
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4" data-aos="fade-left">
            <Card className="h-100 border-0 shadow-lg">
              <Card.Body className="p-5">
                <div className="vision-icon mb-3">
                  <FaEye />
                </div>
                <h2 className="section-title">Vision</h2>
                <p className="lead">
                  To become a trusted global IT partner known for innovation and excellence.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-3">
                    <FaCheckCircle className="text-success me-2" />
                    Lead the market in quality and innovation
                  </li>
                  <li className="mb-3">
                    <FaCheckCircle className="text-success me-2" />
                    Build long-lasting partnerships worldwide
                  </li>
                  <li className="mb-3">
                    <FaCheckCircle className="text-success me-2" />
                    Continuously evolve with emerging technologies
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutMissionVision;