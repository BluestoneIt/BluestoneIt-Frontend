import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaFileContract, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';

const VendorsEngagement: React.FC = () => {
  const msaFeatures = [
    'NDA execution upon engagement',
    'MSA-compliant submission process',
    'Client and vendor confidentiality assured',
    'Background checks and documentation support'
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Vendor-Friendly Engagement</h2>
            <p className="lead text-muted">
              We operate with complete transparency and are ready to align with your compliance
              and contractual requirements.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          <Col lg={6} data-aos="fade-right">
            <Card className="border-0 shadow-lg h-100">
              <Card.Body className="p-5">
                <div className="mb-4" style={{ fontSize: '3rem', color: '#667eea' }}>
                  <FaFileContract />
                </div>
                <h3 className="mb-4">MSA / NDA Ready</h3>
                <ul className="list-unstyled">
                  {msaFeatures.map((feature, index) => (
                    <li key={index} className="mb-3">
                      <FaCheckCircle className="text-success me-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <Card className="border-0 shadow-lg h-100">
              <Card.Body className="p-5">
                <div className="mb-4" style={{ fontSize: '3rem', color: '#667eea' }}>
                  <FaShieldAlt />
                </div>
                <h3 className="mb-4">Compliance & Trust</h3>
                <p className="mb-4">
                  Our vendor partnership model is built on trust, compliance, and mutual success.
                  We ensure every engagement meets industry standards and regulatory requirements.
                </p>
                <div className="mb-3">
                  <FaCheckCircle className="text-success me-2" />
                  Industry-standard compliance
                </div>
                <div className="mb-3">
                  <FaCheckCircle className="text-success me-2" />
                  Secure data handling
                </div>
                <div className="mb-3">
                  <FaCheckCircle className="text-success me-2" />
                  Transparent processes
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default VendorsEngagement;