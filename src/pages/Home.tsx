import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMetaTags } from '../hooks/useMetaTags';
import {
  FaCode,
  FaChartLine,
  FaUsers,
  FaAward,
  FaCogs,
  FaDatabase,
  FaLightbulb,
  FaCheckCircle,
  FaHandshake,
  FaGlobe,
  FaShieldAlt
} from 'react-icons/fa';

const Home: React.FC = () => {
  useMetaTags({
    title: 'US IT Staffing & Offshore Delivery | Bluestone IT Tech LLC',
    description: 'Bluestone IT Tech LLC is a US IT staffing and consulting company delivering offshore and onsite IT candidates across SAP, Cloud, DevOps, Data, and Application Development.',
    keywords: 'US IT Staffing Company, Offshore IT Staffing Services, Onsite IT Consultants USA, IT Staffing & Consulting Services, SAP Staffing Company USA, Offshore Delivery Model IT'
  });

  return (
    <>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content" data-aos="fade-up">
              <h1 className="hero-title">
                End-to-End IT Staffing & Technology Solutions for US Businesses
              </h1>
              <p className="hero-description lead">
                We deliver JD-aligned onsite and offshore IT consultants for US clients and prime vendors<br />
                across SAP, Workday, Oracle, Java, Microsoft Power Platform, Azure, Dynamics 365, AI/ML, Data, Cloud, DevOps, and Application Development.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg me-3 mb-3">
                  Request Candidates
                </Link>
                <Link to="/services" className="btn btn-outline-primary btn-lg mb-3">
                  Our Services
                </Link>
              </div>
            </Col>
            <Col lg={6} className="hero-image" data-aos="fade-left">
              <div className="hero-image-container">
                <img
                  src="/BluestoneUpdateLogoITTech.png"
                  alt="Bluestone IT Tech LLC"
                  className="img-fluid rounded-3 shadow"
                  style={{ marginTop: '-10px', height: '500px', width: '600px', objectFit: 'cover', borderRadius: '50%', backgroundColor: '#f1f1f1' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Trust Bar */}
      <section className="trust-bar py-4 bg-light">
        <Container>
          <Row className="text-center">
            <Col lg={3} md={6} className="mb-3 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
              <FaGlobe className="trust-icon mb-2" />
              <h6 className="mb-0">Offshore & Onsite Delivery</h6>
            </Col>
            <Col lg={3} md={6} className="mb-3 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
              <FaCheckCircle className="trust-icon mb-2" />
              <h6 className="mb-0">JD-Aligned Screening</h6>
            </Col>
            <Col lg={3} md={6} className="mb-3 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
              <FaShieldAlt className="trust-icon mb-2" />
              <h6 className="mb-0">MSA / NDA Ready</h6>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="400">
              <FaAward className="trust-icon mb-2" />
              <h6 className="mb-0">US Market Experience</h6>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Snapshot */}
      <section className="about-snapshot py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h2 className="section-title">Who We Are</h2>
              <p className="lead mb-4">
                Bluestone IT Tech LLC is a US-focused IT staffing and technology consulting company delivering reliable, scalable, and high-quality talent solutions. We partner with US clients and prime vendors to support mission-critical business initiatives through skilled IT professionals and proven delivery models.
              </p>
              <p className="mb-4">
                Our expertise spans enterprise platforms, cloud technologies, data engineering, emerging technologies, and end-to-end IT staffing services.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="mb-4">
                    <FaLightbulb style={{ fontSize: '3rem', color: '#667eea' }} />
                  </div>
                  <h4 className="mb-4">Innovation Driven</h4>
                  <p className="text-muted">
                    We combine deep technical expertise with innovative thinking to solve complex business challenges 
                    and deliver measurable results for our clients.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Staffing Solutions */}
      <section className="staffing-solutions py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Staffing Solutions</h2>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <p className="lead mb-4">
                Bluestone IT Tech LLC delivers scalable IT staffing solutions by leveraging a strong talent pool with deep expertise in business-critical and emerging technologies. Organizations rely on technology to drive productivity, collaboration, and efficiency—making access to the right IT talent essential.
              </p>
              <p className="mb-4">
                We specialize in delivering JD-aligned onsite and offshore IT consultants, carefully vetted for technical expertise, communication skills, and cultural fit.
              </p>
              <p className="mb-4">
                We support industries including:
              </p>
              <ul className="list-unstyled">
                <li><FaCheckCircle className="text-primary me-2" />Financial Services & Insurance</li>
                <li><FaCheckCircle className="text-primary me-2" />Healthcare & Life Sciences</li>
                <li><FaCheckCircle className="text-primary me-2" />Manufacturing</li>
                <li><FaCheckCircle className="text-primary me-2" />Government</li>
                <li><FaCheckCircle className="text-primary me-2" />Pharmaceuticals</li>
              </ul>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="mb-4">
                    <FaUsers style={{ fontSize: '3rem', color: '#667eea' }} />
                  </div>
                  <h4 className="mb-4">Expert Talent Pool</h4>
                  <p className="text-muted">
                    Our extensive network of certified IT professionals ensures we can match the right talent to your specific project requirements and organizational culture.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How We Add Value */}
      <section className="how-we-add-value py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">How We Add Value</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={12} data-aos="fade-up">
              <p className="lead text-center mb-5">
                Bluestone IT Tech LLC helps clients save time and reduce costs through flexible, high-quality IT staffing and consulting solutions.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="value-item">
                <div className="value-icon mb-3">
                  <FaCheckCircle />
                </div>
                <h5>Specialized IT Skills Access</h5>
                <p>
                  Providing access to specialized IT skills on a project, contract, or long-term basis.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="value-item">
                <div className="value-icon mb-3">
                  <FaChartLine />
                </div>
                <h5>Cost Reduction</h5>
                <p>
                  Reducing payroll, benefits, and administrative overhead through flexible staffing models.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="value-item">
                <div className="value-icon mb-3">
                  <FaGlobe />
                </div>
                <h5>Flexible Delivery Models</h5>
                <p>
                  Implementing just-in-time onsite and offshore staffing models for optimal efficiency.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="value-item">
                <div className="value-icon mb-3">
                  <FaAward />
                </div>
                <h5>Quality Hiring</h5>
                <p>
                  Reducing time-to-hire while improving quality-of-hire through JD-aligned screening.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="500">
              <div className="value-item">
                <div className="value-icon mb-3">
                  <FaCogs />
                </div>
                <h5>Centralized Management</h5>
                <p>
                  Centralizing and managing IT staffing requirements for better control and consistency.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="services-section py-5 bg-light" id="services">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Comprehensive IT solutions tailored to meet your business needs
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaUsers />
                  </div>
                  <Card.Title>IT Staffing & Talent Solutions</Card.Title>
                  <Card.Text>
                    Onsite & offshore IT staffing, contract, C2H, and full-time hiring, bench consultants.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaCogs />
                  </div>
                  <Card.Title>Enterprise & ERP Services</Card.Title>
                  <Card.Text>
                    SAP, Workday, Oracle, Microsoft Technologies, Power Platform, Dynamics 365, Azure Cloud.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaCode />
                  </div>
                  <Card.Title>Application & Engineering</Card.Title>
                  <Card.Text>
                    Java & Full-Stack Development, Application Development & Support.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaDatabase />
                  </div>
                  <Card.Title>Data, AI/ML & Cloud</Card.Title>
                  <Card.Text>
                    Data Engineering & Analytics, AI / Machine Learning, Cloud & DevOps.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="500">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaCode />
                  </div>
                  <Card.Title>Application Development</Card.Title>
                  <Card.Text>
                    Custom web and enterprise application development.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="600">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaUsers />
                  </div>
                  <Card.Title>IT Staffing & Talent Solutions</Card.Title>
                  <Card.Text>
                    Qualified IT candidates for offshore and onsite roles.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="text-center mt-4" data-aos="fade-up">
              <Link to="/services" className="btn btn-primary btn-lg">View All Services</Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Applicant Outsourcing & Support Services */}
      <section className="applicant-outsourcing py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Applicant Outsourcing & Application Support</h2>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <p className="lead mb-4">
                Bluestone IT Tech LLC offers applicant outsourcing and application maintenance services to help organizations scale efficiently and maintain operational excellence.
              </p>
              <p className="mb-4">
                We provide flexible delivery models—including onsite, offshore, and hybrid—to ensure reliable support, reduced costs, and improved system performance.
              </p>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="mb-4">
                    <FaShieldAlt style={{ fontSize: '3rem', color: '#667eea' }} />
                  </div>
                  <h4 className="mb-4">Reliable Support Services</h4>
                  <p className="text-muted">
                    Our comprehensive outsourcing solutions ensure your applications run smoothly with minimal downtime and maximum efficiency.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Bluestone IT Tech */}
      <section className="why-choose-us py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Why Bluestone IT Tech</h2>
              <p className="section-subtitle">
                We combine expertise, innovation, and dedication to deliver exceptional results
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaCheckCircle />
                </div>
                <h5>JD-Aligned Candidate Screening</h5>
                <p>
                  Rigorous screening process to ensure candidates match job descriptions perfectly.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaGlobe />
                </div>
                <h5>Proven Offshore & Onsite Delivery</h5>
                <p>
                  Established track record in delivering high-quality IT solutions globally.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaHandshake />
                </div>
                <h5>Vendor-Friendly (MSA / NDA Ready)</h5>
                <p>
                  Ready to work with prime vendors under standard agreements and NDAs.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaUsers />
                </div>
                <h5>Transparent Communication</h5>
                <p>
                  Clear, open communication throughout the engagement process.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaCogs />
                </div>
                <h5>Scalable Engagement Models</h5>
                <p>
                  Flexible models that adapt to your changing business needs.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="600">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaAward />
                </div>
                <h5>Long-Term Partnership Focus</h5>
                <p>
                  Committed to building lasting relationships for mutual success.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center" data-aos="fade-up">
              <h2 className="cta-title text-white">Let's Build the Right Team for Your Business</h2>
              <p className="cta-description text-white mb-4">
                Whether you need skilled IT consultants or end-to-end staffing support, Bluestone IT Tech LLC is ready to help.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg">
                Contact Our Team
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <style>{`
        .trust-icon {
          font-size: 2.5rem;
          color: #667eea;
        }
        .industry-card {
          transition: all 0.3s ease;
        }
        .industry-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
        }
        .industry-icon {
          font-size: 2rem;
          color: #667eea;
        }
      `}</style>
    </>
  );
};

export default Home;