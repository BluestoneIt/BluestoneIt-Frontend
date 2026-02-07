import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const StaffingBenefits: React.FC = () => {
  const benefits = [
    'JD-aligned candidate screening',
    'Technical & communication vetting',
    'Flexible engagement models',
    'Compliance-ready onboarding',
    'Ongoing support post-deployment',
    'Reduced hiring risk'
  ];

  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={6} data-aos="fade-right">
            <h2 className="display-5 fw-bold mb-4">
              Why Clients Choose Our Staffing Services
            </h2>
            <p className="lead text-muted mb-4">
              We go beyond traditional recruitment to deliver quality, compliance, and long-term value.
            </p>
            <ul className="list-unstyled">
              {benefits.map((benefit, index) => (
                <li key={index} className="mb-3">
                  <FaCheckCircle className="text-success me-3" />
                  <span className="h6">{benefit}</span>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <Card className="border-0 shadow-lg bg-navy-card h-100">
              <Card.Body className="p-5 d-flex flex-column justify-content-center">
                <h3 className="mb-4 text-white">Client & Vendor Engagement</h3>
                <p className="mb-4">
                  We work seamlessly with direct clients, prime vendors, and implementation partners
                  through transparent and efficient engagement models.
                </p>
                <div className="mb-3">
                  <FaCheckCircle className="me-2" />
                  NDA & MSA aligned engagement
                </div>
                <div className="mb-3">
                  <FaCheckCircle className="me-2" />
                  JD-based candidate submission
                </div>
                <div className="mb-3">
                  <FaCheckCircle className="me-2" />
                  Compliance & documentation support
                </div>
                <div className="mb-4">
                  <FaCheckCircle className="me-2" />
                  Continuous pipeline management
                </div>
                <Link to="/vendors" className="btn btn-light">
                  Learn About Vendor Partnership <FaArrowRight className="ms-2" />
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StaffingBenefits;