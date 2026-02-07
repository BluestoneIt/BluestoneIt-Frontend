import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaBriefcase,
  FaTrophy,
  FaDollarSign,
  FaGlobeAmericas
} from 'react-icons/fa';

const CareersBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <FaBriefcase />,
      title: 'Growth-Oriented Culture',
      description: 'Continuous learning and career advancement opportunities'
    },
    {
      icon: <FaTrophy />,
      title: 'Challenging Projects',
      description: 'Work on cutting-edge technologies with global clients'
    },
    {
      icon: <FaDollarSign />,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and comprehensive benefits'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Global Exposure',
      description: 'Collaborate with international teams and diverse projects'
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Why Work With Us?</h2>
            <p className="lead text-muted">
              We are always looking for passionate professionals to join our growing team
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {benefits.map((benefit, index) => (
            <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="text-center h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '3rem', color: '#667eea' }}>
                    {benefit.icon}
                  </div>
                  <Card.Title className="h5 mb-3">{benefit.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {benefit.description}
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

export default CareersBenefits;