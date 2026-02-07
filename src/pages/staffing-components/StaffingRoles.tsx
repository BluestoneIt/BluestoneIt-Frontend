import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaCogs,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaCode,
  FaCheckCircle
} from 'react-icons/fa';

const StaffingRoles: React.FC = () => {
  const roles = [
    {
      icon: <FaCogs />,
      title: 'SAP Consultants',
      description: 'Functional & Technical'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud & DevOps Engineers',
      description: 'AWS, Azure, Kubernetes'
    },
    {
      icon: <FaDatabase />,
      title: 'Data Engineers & Analysts',
      description: 'ETL, Data Pipelines, BI'
    },
    {
      icon: <FaRobot />,
      title: 'AI & Machine Learning',
      description: 'ML Engineers, Data Scientists'
    },
    {
      icon: <FaCloud />,
      title: 'Azure Cloud Solutions',
      description: 'Cloud architects and developers'
    },
    {
      icon: <FaCogs />,
      title: 'Microsoft Dynamics 365',
      description: 'Functional & Technical consultants'
    },
    {
      icon: <FaCode />,
      title: 'Full Stack Developers',
      description: 'Web & Application development'
    },
    {
      icon: <FaCheckCircle />,
      title: 'QA & Automation Engineers',
      description: 'Test automation specialists'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Roles We Support</h2>
            <p className="lead text-muted">
              Expert talent across diverse technology domains
            </p>
          </Col>
        </Row>
        <Row className="g-4">
          {roles.map((role, index) => (
            <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className="p-4">
                  <div className="mb-3" style={{ fontSize: '2.5rem', color: '#667eea' }}>
                    {role.icon}
                  </div>
                  <Card.Title className="h6 mb-2">{role.title}</Card.Title>
                  <Card.Text className="text-muted small">
                    {role.description}
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

export default StaffingRoles;