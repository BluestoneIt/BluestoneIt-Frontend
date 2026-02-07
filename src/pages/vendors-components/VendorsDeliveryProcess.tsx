import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const VendorsDeliveryProcess: React.FC = () => {
  const deliveryProcess = [
    {
      step: '01',
      title: 'Requirement Intake',
      description: 'Understanding your specific needs and job descriptions'
    },
    {
      step: '02',
      title: 'Candidate Sourcing',
      description: 'Leveraging our offshore and onsite talent pools'
    },
    {
      step: '03',
      title: 'Screening & Validation',
      description: 'Technical and communication assessments'
    },
    {
      step: '04',
      title: 'Submission',
      description: 'Compliant and documented candidate profiles'
    },
    {
      step: '05',
      title: 'Interview Support',
      description: 'Coordination and candidate preparation'
    },
    {
      step: '06',
      title: 'Onboarding',
      description: 'Smooth deployment and post-placement follow-up'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our Delivery Process</h2>
            <p className="lead text-muted">
              A proven six-step process for successful candidate placement
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {deliveryProcess.map((process, index) => (
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

export default VendorsDeliveryProcess;