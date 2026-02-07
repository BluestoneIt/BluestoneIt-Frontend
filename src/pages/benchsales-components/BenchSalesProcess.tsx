import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const BenchSalesProcess: React.FC = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Requirement Analysis',
      description: 'Understanding your specific job requirements and candidate criteria'
    },
    {
      step: '02',
      title: 'Resume Marketing',
      description: 'Targeted submissions to prime vendors and direct clients'
    },
    {
      step: '03',
      title: 'Compliance Checklist',
      description: 'Ensuring all documentation and background checks are complete'
    },
    {
      step: '04',
      title: 'Interview Scheduling',
      description: 'Coordinating interviews and providing candidate support'
    },
    {
      step: '05',
      title: 'Offer & Onboarding',
      description: 'Facilitating offer acceptance and smooth onboarding'
    },
    {
      step: '06',
      title: 'Deployment',
      description: 'Successful placement and ongoing relationship management'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Bench Sales Process</h2>
            <p className="lead text-muted">
              A systematic approach to ensure successful candidate placement
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {processSteps.map((process, index) => (
            <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="display-4 fw-bold text-primary mb-3">{process.step}</div>
                  <Card.Title className="h5 mb-3">{process.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {process.description}
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

export default BenchSalesProcess;