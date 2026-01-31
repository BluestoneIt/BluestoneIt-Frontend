import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaHandshake, 
  FaFileContract, 
  FaShieldAlt, 
  FaCheckCircle,
  FaEnvelope,
  FaClock,
  FaUsers,
  FaClipboardCheck
} from 'react-icons/fa';
import EmailLink from '../components/EmailLink';

const Vendors: React.FC = () => {
  const msaFeatures = [
    'NDA execution upon engagement',
    'MSA-compliant submission process',
    'Client and vendor confidentiality assured',
    'Background checks and documentation support'
  ];

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

  const techFocus = [
    'SAP (Functional & Technical)',
    'Cloud & DevOps (AWS, Azure)',
    'Data, Analytics & AI',
    'Application Development',
    'QA & Automation',
    'Microsoft Dynamics 365'
  ];

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
    <>
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="page-title" data-aos="fade-up">
                Partner With Bluestone IT Tech LLC
              </h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Collaborating with prime vendors, implementation partners, and direct clients across the US IT ecosystem
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vendor-Friendly Engagement */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Vendor-Friendly Engagement</h2>
              <p className="lead text-muted">
                We operate with complete transparency and are ready to align with your compliance 
                and contractual requirements.
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={6} data-aos="fade-right">
              <Card className="border-0 shadow-lg h-100">
                <Card.Body className="p-5">
                  <div className="mb-4" style={{ fontSize: '3rem', color: '#667eea' }}>
                    <FaFileContract />
                  </div>
                  <h3 className="mb-4">MSA / NDA Ready</h3>
                  <ul className="list-unstyled">
                    {msaFeatures.map((feature, index) => (
                      <li key={index} className="mb-3">
                        <FaCheckCircle className="text-success me-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <Card className="border-0 shadow-lg h-100">
                <Card.Body className="p-5">
                  <div className="mb-4" style={{ fontSize: '3rem', color: '#667eea' }}>
                    <FaShieldAlt />
                  </div>
                  <h3 className="mb-4">Compliance & Trust</h3>
                  <p className="mb-4">
                    Our vendor partnership model is built on trust, compliance, and mutual success. 
                    We ensure every engagement meets industry standards and regulatory requirements.
                  </p>
                  <div className="mb-3">
                    <FaCheckCircle className="text-success me-2" />
                    Industry-standard compliance
                  </div>
                  <div className="mb-3">
                    <FaCheckCircle className="text-success me-2" />
                    Secure data handling
                  </div>
                  <div className="mb-3">
                    <FaCheckCircle className="text-success me-2" />
                    Transparent processes
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What Vendors Can Expect */}
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

      {/* Technology Focus */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={6} data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">Technology Focus Areas</h2>
              <p className="lead text-muted mb-4">
                Specialized talent across high-demand technology domains
              </p>
              <Row>
                {techFocus.map((tech, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <div className="d-flex align-items-start">
                      <FaCheckCircle className="text-success me-3 mt-1" />
                      <span className="h6">{tech}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <Card className="border-0 shadow-lg bg-navy-card text-white h-100">
                <Card.Body className="p-5 d-flex flex-column justify-content-center">
                  <h3 className="mb-4 text-white">Our Delivery Model</h3>
                  <p className="mb-4">
                    From requirement intake to post-placement support, we follow a structured 
                    and transparent delivery process that ensures quality at every step.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><FaCheckCircle className="me-2" /> Transparent communication</li>
                    <li className="mb-2"><FaCheckCircle className="me-2" /> Quality assurance</li>
                    <li className="mb-2"><FaCheckCircle className="me-2" /> Timely delivery</li>
                    <li className="mb-2"><FaCheckCircle className="me-2" /> Ongoing support</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Delivery Process */}
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

      {/* CTA Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Let's Partner</h2>
              <p className="lead text-muted mb-4">
                Ready to collaborate? Reach out to our vendor partnerships team
              </p>
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
                <FaEnvelope style={{ fontSize: '2rem', color: '#667eea' }} />
                <div className="h4 mb-0">
                  <EmailLink email="vendors@bluestoneittech.com" />
                </div>
              </div>
              <div className="mt-4">
                <Link to="/contact" className="btn btn-primary btn-lg me-3">
                  Contact Us
                </Link>
                <Link to="/staffing" className="btn btn-outline-primary btn-lg">
                  View Staffing Services
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style>{`
        .min-vh-50 {
          min-height: 50vh;
        }
        .bg-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

export default Vendors;
