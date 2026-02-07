import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaAward, FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';

const AboutCoreValues: React.FC = () => {
  return (
    <section className="experts-section py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Core Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
            <Card className="expert-card h-100 border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <div className="expert-icon mb-3">
                  <FaAward />
                </div>
                <Card.Title>Integrity</Card.Title>
                <Card.Text>
                  We operate with honesty and transparency in everything we do
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <Card className="expert-card h-100 border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <div className="expert-icon mb-3">
                  <FaLightbulb />
                </div>
                <Card.Title>Innovation</Card.Title>
                <Card.Text>
                  We embrace new ideas and continuously seek better solutions
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
            <Card className="expert-card h-100 border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <div className="expert-icon mb-3">
                  <FaRocket />
                </div>
                <Card.Title>Excellence</Card.Title>
                <Card.Text>
                  We strive for the highest quality in our work and services
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
            <Card className="expert-card h-100 border-0 shadow-sm text-center">
              <Card.Body className="p-4">
                <div className="expert-icon mb-3">
                  <FaHandshake />
                </div>
                <Card.Title>Collaboration</Card.Title>
                <Card.Text>
                  We work together to achieve common goals and mutual success
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCoreValues;