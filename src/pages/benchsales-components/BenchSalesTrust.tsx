import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHandshake, FaArrowRight } from 'react-icons/fa';

const BenchSalesTrust: React.FC = () => {
  const whyTrust = [
    'Transparent candidate ownership',
    'Fast response times',
    'Accurate skill representation',
    'Long-term vendor relationships',
    'Quality assurance processes',
    'Post-placement support'
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <h2 className="display-5 fw-bold mb-4">
              Why Vendors Trust Our Bench
            </h2>
            <p className="lead text-muted mb-4">
              We've built our reputation on reliability, transparency, and quality delivery.
            </p>
            <Row>
              {whyTrust.map((reason, index) => (
                <Col md={6} key={index} className="mb-3">
                  <div className="d-flex align-items-start">
                    <FaCheckCircle className="text-success me-3 mt-1" />
                    <span className="h6">{reason}</span>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="mt-4">
              <Link to="/vendors" className="btn btn-primary btn-lg">
                Partner With Us <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <Card className="border-0 shadow-lg bg-navy-card text-white">
              <Card.Body className="p-5">
                <div className="mb-4" style={{ fontSize: '3rem' }}>
                  <FaHandshake />
                </div>
                <h3 className="mb-4 text-white">Long-Term Partnerships</h3>
                <p className="mb-4">
                  Our focus goes beyond individual placements. We build lasting relationships
                  with vendors and clients, ensuring mutual success and growth.
                </p>
                <ul className="list-unstyled">
                  <li className="mb-3">
                    <FaCheckCircle className="me-2" />
                    Consistent quality delivery
                  </li>
                  <li className="mb-3">
                    <FaCheckCircle className="me-2" />
                    Proactive communication
                  </li>
                  <li className="mb-3">
                    <FaCheckCircle className="me-2" />
                    Flexible engagement models
                  </li>
                  <li className="mb-3">
                    <FaCheckCircle className="me-2" />
                    Continuous improvement
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

export default BenchSalesTrust;