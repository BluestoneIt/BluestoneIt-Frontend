import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaShieldAlt } from 'react-icons/fa';

const HomeApplicantOutsourcing: React.FC = () => {
  return (
    <section className="applicant-outsourcing py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Applicant Outsourcing & Application Support</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <p className="lead mb-4">
              Bluestone IT Tech LLC offers applicant outsourcing and application maintenance services to help organizations scale efficiently and maintain operational excellence.
            </p>
            <p className="mb-4">
              We provide flexible delivery models—including onsite, offshore, and hybrid—to ensure reliable support, reduced costs, and improved system performance.
            </p>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <div className="mb-4">
                  <FaShieldAlt style={{ fontSize: '3rem', color: '#667eea' }} />
                </div>
                <h4 className="mb-4">Reliable Support Services</h4>
                <p className="text-muted">
                  Our comprehensive outsourcing solutions ensure your applications run smoothly with minimal downtime and maximum efficiency.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeApplicantOutsourcing;