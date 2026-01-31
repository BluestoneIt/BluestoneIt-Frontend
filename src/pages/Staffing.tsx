import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaGlobe, 
  FaMapMarkerAlt, 
  FaUserTie, 
  FaClock, 
  FaCheckCircle,
  FaArrowRight,
  FaCode,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaCogs
} from 'react-icons/fa';

const Staffing: React.FC = () => {
  const capabilities = [
    {
      icon: <FaGlobe />,
      title: 'Offshore Staffing',
      description: 'India & global delivery centers'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Onsite Staffing',
      description: 'US-based consultants'
    },
    {
      icon: <FaUserTie />,
      title: 'Flexible Engagement',
      description: 'Contract, Contract-to-Hire, and Full-Time hiring'
    },
    {
      icon: <FaClock />,
      title: 'Rapid Turnaround',
      description: 'Quick response on priority requirements'
    }
  ];

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

  const benefits = [
    'JD-aligned candidate screening',
    'Technical & communication vetting',
    'Flexible engagement models',
    'Compliance-ready onboarding',
    'Ongoing support post-deployment',
    'Reduced hiring risk'
  ];

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="page-title" data-aos="fade-up">
                IT Staffing & Talent Solutions
              </h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Delivering qualified offshore and onsite candidates aligned precisely with your job requirements
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">IT Staffing & Talent Delivery Model</h2>
              <p className="lead text-muted">
                Bluestone IT Tech LLC provides end-to-end IT staffing solutions, delivering qualified 
                offshore and onsite candidates aligned precisely with client job descriptions and project requirements.
              </p>
            </Col>
          </Row>

          {/* Capabilities Grid */}
          <Row className="g-4 mb-5">
            {capabilities.map((capability, index) => (
              <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="text-center h-100 border-0 shadow-sm hover-shadow">
                  <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem', color: '#667eea' }}>
                      {capability.icon}
                    </div>
                    <Card.Title className="h5 mb-3">{capability.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {capability.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Roles Section */}
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

      {/* Benefits Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={6} data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">
                Why Clients Choose Our Staffing Services
              </h2>
              <p className="lead text-muted mb-4">
                We go beyond traditional recruitment to deliver quality, compliance, and long-term value.
              </p>
              <ul className="list-unstyled">
                {benefits.map((benefit, index) => (
                  <li key={index} className="mb-3">
                    <FaCheckCircle className="text-success me-3" />
                    <span className="h6">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <Card className="border-0 shadow-lg bg-navy-card h-100">
                <Card.Body className="p-5 d-flex flex-column justify-content-center">
                  <h3 className="mb-4 text-white">Client & Vendor Engagement</h3>
                  <p className="mb-4">
                    We work seamlessly with direct clients, prime vendors, and implementation partners 
                    through transparent and efficient engagement models.
                  </p>
                  <div className="mb-3">
                    <FaCheckCircle className="me-2" />
                    NDA & MSA aligned engagement
                  </div>
                  <div className="mb-3">
                    <FaCheckCircle className="me-2" />
                    JD-based candidate submission
                  </div>
                  <div className="mb-3">
                    <FaCheckCircle className="me-2" />
                    Compliance & documentation support
                  </div>
                  <div className="mb-4">
                    <FaCheckCircle className="me-2" />
                    Continuous pipeline management
                  </div>
                  <Link to="/vendors" className="btn btn-light">
                    Learn About Vendor Partnership <FaArrowRight className="ms-2" />
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">
                Ready to Build Your Team?
              </h2>
              <p className="lead text-muted mb-4">
                Let's discuss your staffing needs and find the right talent for your projects
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg me-3">
                Get Started <FaArrowRight className="ms-2" />
              </Link>
              <Link to="/vendors" className="btn btn-outline-primary btn-lg">
                For Vendors
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <style>{`
        .min-vh-50 {
          min-height: 50vh;
        }
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
      `}</style>
    </>
  );
};

export default Staffing;
