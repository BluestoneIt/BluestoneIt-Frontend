import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHandshake, FaClock, FaUsers, FaClipboardCheck } from 'react-icons/fa';

const VendorsExpectations: React.FC = () => {
  const expectations = [
    {
      icon: <FaUsers />,
      title: 'JD-Aligned Delivery',
      description: 'Offshore & onsite candidates matching exact job descriptions'
    },
    {
      icon: <FaClock />,
      title: 'Quick Turnaround',
      description: 'Fast response on priority requirements'
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Clear Communication',
      description: 'Submission tracking and timely follow-ups'
    },
    {
      icon: <FaHandshake />,
      title: 'Post-Placement Support',
      description: 'Ongoing support after candidate deployment'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">What Vendors Can Expect</h2>
            <p className="lead text-muted">
              Reliable delivery, quality candidates, and seamless collaboration
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {expectations.map((item, index) => (
            <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="text-center h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '3rem', color: '#667eea' }}>
                    {item.icon}
                  </div>
                  <Card.Title className="h5 mb-3">{item.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {item.description}
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

export default VendorsExpectations;