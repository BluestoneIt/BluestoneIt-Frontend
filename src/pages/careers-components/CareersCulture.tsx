import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const CareersCulture: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <h2 className="display-5 fw-bold mb-4">Our Culture</h2>
            <p className="lead text-muted mb-4">
              At Bluestone IT Tech LLC, we foster an environment where innovation thrives and
              every team member's contribution is valued.
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FaCheckCircle className="text-success me-3" />
                <span className="h6">Collaborative team environment</span>
              </li>
              <li className="mb-3">
                <FaCheckCircle className="text-success me-3" />
                <span className="h6">Continuous learning opportunities</span>
              </li>
              <li className="mb-3">
                <FaCheckCircle className="text-success me-3" />
                <span className="h6">Work-life balance</span>
              </li>
              <li className="mb-3">
                <FaCheckCircle className="text-success me-3" />
                <span className="h6">Recognition and rewards</span>
              </li>
              <li className="mb-3">
                <FaCheckCircle className="text-success me-3" />
                <span className="h6">Diverse and inclusive workplace</span>
              </li>
            </ul>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <Card className="border-0 shadow-lg bg-navy-card text-white">
              <Card.Body className="p-5">
                <h3 className="mb-4 text-white">Core Values</h3>
                <div className="mb-4">
                  <h5 className="mb-2 text-white">Integrity</h5>
                  <p>We operate with honesty and transparency in everything we do</p>
                </div>
                <div className="mb-4">
                  <h5 className="mb-2 text-white">Innovation</h5>
                  <p>We embrace new ideas and continuously seek better solutions</p>
                </div>
                <div className="mb-4">
                  <h5 className="mb-2 text-white">Excellence</h5>
                  <p>We strive for the highest quality in our work and services</p>
                </div>
                <div>
                  <h5 className="mb-2 text-white">Collaboration</h5>
                  <p>We work together to achieve common goals and mutual success</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CareersCulture;