import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaUsers,
  FaFileAlt,
  FaDollarSign,
  FaShieldAlt
} from 'react-icons/fa';

const BenchSalesOverview: React.FC = () => {
  const strengths = [
    {
      icon: <FaUsers />,
      title: 'Active Bench',
      description: 'Pre-screened consultants across SAP, Cloud, Data, DevOps, and Full Stack'
    },
    {
      icon: <FaFileAlt />,
      title: 'JD-to-Resume Matching',
      description: 'Accurate skill representation before submission'
    },
    {
      icon: <FaDollarSign />,
      title: 'Rate Alignment',
      description: 'Quick rate confirmation and negotiation'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Visa-Ready Consultants',
      description: 'Location-ready consultants for immediate deployment'
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our Bench Sales Strength</h2>
            <p className="lead text-muted">
              Bluestone IT Tech LLC maintains a strong bench of pre-screened, market-ready consultants
              available for immediate deployment on offshore and onsite projects.
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {strengths.map((strength, index) => (
            <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="text-center h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '3rem', color: '#667eea' }}>
                    {strength.icon}
                  </div>
                  <Card.Title className="h5 mb-3">{strength.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {strength.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BenchSalesOverview;