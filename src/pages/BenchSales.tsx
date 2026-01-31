import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMetaTags } from '../hooks/useMetaTags';
import {
  FaUsers,
  FaFileAlt,
  FaDollarSign,
  FaCheckCircle,
  FaHandshake,
  FaShieldAlt,
  FaArrowRight
} from 'react-icons/fa';

const BenchSales: React.FC = () => {
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

  const whyTrust = [
    'Transparent candidate ownership',
    'Fast response times',
    'Accurate skill representation',
    'Long-term vendor relationships',
    'Quality assurance processes',
    'Post-placement support'
  ];

  useMetaTags({
    title: 'Bench Sales Services USA | Bluestone IT Tech LLC',
    description: 'Pre-screened, market-ready IT consultants available for immediate deployment. Bench sales services across SAP, Cloud, Data, DevOps, and Full Stack technologies.',
    keywords: 'bench sales, IT bench consultants, candidate marketing, pre-screened consultants, IT talent pool'
  });

  return (
    <>

      {/* Page Header */}
      <section className="page-header">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="page-title" data-aos="fade-up">
                Bench Sales & Candidate Marketing
              </h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Market-ready consultants available for immediate deployment on offshore and onsite projects
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

      {/* Bench Sales Process */}
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

      {/* Why Vendors Trust */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">
                Why Vendors Trust Our Bench
              </h2>
              <p className="lead text-muted mb-4">
                We've built our reputation on reliability, transparency, and quality delivery.
              </p>
              <Row>
                {whyTrust.map((reason, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <div className="d-flex align-items-start">
                      <FaCheckCircle className="text-success me-3 mt-1" />
                      <span className="h6">{reason}</span>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="mt-4">
                <Link to="/vendors" className="btn btn-primary btn-lg">
                  Partner With Us <FaArrowRight className="ms-2" />
                </Link>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <Card className="border-0 shadow-lg bg-navy-card text-white">
                <Card.Body className="p-5">
                  <div className="mb-4" style={{ fontSize: '3rem' }}>
                    <FaHandshake />
                  </div>
                  <h3 className="mb-4 text-white">Long-Term Partnerships</h3>
                  <p className="mb-4">
                    Our focus goes beyond individual placements. We build lasting relationships 
                    with vendors and clients, ensuring mutual success and growth.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <FaCheckCircle className="me-2" />
                      Consistent quality delivery
                    </li>
                    <li className="mb-3">
                      <FaCheckCircle className="me-2" />
                      Proactive communication
                    </li>
                    <li className="mb-3">
                      <FaCheckCircle className="me-2" />
                      Flexible engagement models
                    </li>
                    <li className="mb-3">
                      <FaCheckCircle className="me-2" />
                      Continuous improvement
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technology Coverage */}
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

      {/* CTA Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">
                Ready to Explore Our Bench?
              </h2>
              <p className="lead text-muted mb-4">
                Connect with our bench sales team to discuss your current requirements
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg me-3">
                Contact Us <FaArrowRight className="ms-2" />
              </Link>
              <Link to="/staffing" className="btn btn-outline-primary btn-lg">
                View All Services
              </Link>
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

export default BenchSales;
