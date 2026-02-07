import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaLightbulb,
  FaUsers,
  FaLayerGroup,
  FaCloud,
  FaDatabase,
  FaCode,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: <FaLightbulb />,
      title: 'IT Consulting & Strategy',
      description: 'Align technology with business goals through expert consulting.',
      features: [
        'Digital transformation strategy',
        'Enterprise architecture',
        'Process optimization',
        'Technology roadmap planning'
      ]
    },
    {
      icon: <FaUsers />,
      title: 'IT Staffing & Talent Solutions',
      description: 'We deliver qualified IT candidates for offshore and onsite roles as per job description requirements.',
      features: [
        'Offshore & onsite candidate delivery',
        'Contract, contract-to-hire, and full-time staffing',
        'Bench consultants',
        'US market expertise'
      ],
      link: '/staffing',
      linkText: 'Learn More About Staffing'
    },
    {
      icon: <FaLayerGroup />,
      title: 'SAP Services',
      description: 'Comprehensive SAP implementation, upgrade, and support services.',
      features: [
        'SAP MM / SD / WM',
        'SAP SuccessFactors',
        'Implementation & Support',
        'SAP migration and upgrades'
      ]
    },
    {
      icon: <FaCloud />,
      title: 'Cloud & DevOps',
      description: 'AWS, Azure, Kubernetes, CI/CD automation and cloud migration.',
      features: [
        'AWS & Azure services',
        'Kubernetes & containers',
        'CI/CD pipelines',
        'Cloud migration and optimization'
      ]
    },
    {
      icon: <FaDatabase />,
      title: 'Data Engineering & Analytics',
      description: 'Data pipelines, analytics, reporting, and BI solutions.',
      features: [
        'Data engineering',
        'ETL / ELT pipelines',
        'Business intelligence',
        'Advanced analytics and reporting'
      ]
    },
    {
      icon: <FaCode />,
      title: 'Application Development',
      description: 'Custom web and enterprise application development.',
      features: [
        'Full-stack development',
        'Enterprise applications',
        'Mobile app development',
        'API development and integration'
      ]
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col lg={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 service-card border-0 shadow-sm hover-shadow">
                <Card.Body className="p-4">
                  <div className="service-icon text-primary mb-3" style={{ fontSize: '3rem' }}>
                    {service.icon}
                  </div>
                  <Card.Title className="h4 mb-3">{service.title}</Card.Title>
                  <Card.Text className="text-muted mb-4">
                    {service.description}
                  </Card.Text>
                  <ul className="list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <FaCheckCircle className="text-success me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <Link to={service.link} className="btn btn-outline-primary mt-3">
                      {service.linkText} <FaArrowRight className="ms-2" />
                    </Link>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesGrid;