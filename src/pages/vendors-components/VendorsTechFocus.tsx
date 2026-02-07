import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const VendorsTechFocus: React.FC = () => {
  const techFocus = [
    'SAP (Functional & Technical)',
    'Cloud & DevOps (AWS, Azure)',
    'Data, Analytics & AI',
    'Application Development',
    'QA & Automation',
    'Microsoft Dynamics 365'
  ];

  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={6} data-aos="fade-right">
            <h2 className="display-5 fw-bold mb-4">Technology Focus Areas</h2>
            <p className="lead text-muted mb-4">
              Specialized talent across high-demand technology domains
            </p>
            <Row>
              {techFocus.map((tech, index) => (
                <Col md={6} key={index} className="mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle className="text-success me-3 mt-1" />
                    <span className="h6">{tech}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <Card className="border-0 shadow-lg bg-navy-card text-white h-100">
              <Card.Body className="p-5 d-flex flex-column justify-content-center">
                <h3 className="mb-4 text-white">Our Delivery Model</h3>
                <p className="mb-4">
                  From requirement intake to post-placement support, we follow a structured
                  and transparent delivery process that ensures quality at every step.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle className="me-2" /> Transparent communication</li>
                  <li className="mb-2"><FaCheckCircle className="me-2" /> Quality assurance</li>
                  <li className="mb-2"><FaCheckCircle className="me-2" /> Timely delivery</li>
                  <li className="mb-2"><FaCheckCircle className="me-2" /> Ongoing support</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VendorsTechFocus;