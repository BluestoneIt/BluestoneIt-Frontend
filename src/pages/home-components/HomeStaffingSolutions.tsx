import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle, FaUsers } from 'react-icons/fa';

const HomeStaffingSolutions: React.FC = () => {
  return (
    <section className="staffing-solutions py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">Staffing Solutions</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <p className="lead mb-4">
              Bluestone IT Tech LLC delivers scalable IT staffing solutions by leveraging a strong talent pool with deep expertise in business-critical and emerging technologies. Organizations rely on technology to drive productivity, collaboration, and efficiency—making access to the right IT talent essential.
            </p>
            <p className="mb-4">
              We specialize in delivering JD-aligned onsite and offshore IT consultants, carefully vetted for technical expertise, communication skills, and cultural fit.
            </p>
            <p className="mb-4">
              We support industries including:
            </p>
            <ul className="list-unstyled">
              <li><FaCheckCircle className="text-primary me-2" />Financial Services & Insurance</li>
              <li><FaCheckCircle className="text-primary me-2" />Healthcare & Life Sciences</li>
              <li><FaCheckCircle className="text-primary me-2" />Manufacturing</li>
              <li><FaCheckCircle className="text-primary me-2" />Government</li>
              <li><FaCheckCircle className="text-primary me-2" />Pharmaceuticals</li>
            </ul>
          </Col>
          <Col lg={6} data-aos="fade-left">
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <div className="mb-4">
                  <FaUsers style={{ fontSize: '3rem', color: '#667eea' }} />
                </div>
                <h4 className="mb-4">Expert Talent Pool</h4>
                <p className="text-muted">
                  Our extensive network of certified IT professionals ensures we can match the right talent to your specific project requirements and organizational culture.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeStaffingSolutions;