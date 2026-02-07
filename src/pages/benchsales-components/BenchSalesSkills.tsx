import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const BenchSalesSkills: React.FC = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Available Skill Sets</h2>
            <p className="lead text-muted mb-5">
              Our bench covers a wide range of in-demand technologies
            </p>
          </Col>
        </Row>
        <Row className="g-3">
          {[
            'SAP MM/SD/WM',
            'SAP SuccessFactors',
            'AWS Cloud',
            'Azure Cloud',
            'Kubernetes',
            'DevOps Engineers',
            'Data Engineers',
            'Python Developers',
            'Java Full Stack',
            'React/Angular Developers',
            'QA Automation',
            'Business Analysts'
          ].map((skill, index) => (
            <Col lg={3} md={4} sm={6} key={index} data-aos="fade-up" data-aos-delay={index * 50}>
              <Card className="text-center border-0 shadow-sm h-100 hover-shadow">
                <Card.Body className="p-3">
                  <FaCheckCircle className="text-success me-2" />
                  <span className="fw-semibold">{skill}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BenchSalesSkills;