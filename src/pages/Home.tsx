import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaCode, 
  FaCloud, 
  FaChartLine, 
  FaUsers, 
  FaAward, 
  FaCogs,
  FaDatabase,
  FaLightbulb,
  FaCheckCircle,
  FaHandshake,
  FaGlobe,
  FaTrophy,
  FaShieldAlt
} from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content" data-aos="fade-up">
              <h1 className="hero-title">
                End-to-End IT Solutions for 
                <span className="text-primary"> Digital-First Businesses</span>
              </h1>
              <p className="hero-description lead">
                We help organizations accelerate growth through SAP, Cloud, DevOps, Data, and IT Consulting services.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg me-3 mb-3">
                  Talk to Our Experts
                </Link>
                <Link to="/services" className="btn btn-outline-primary btn-lg mb-3">
                  Our Services
                </Link>
              </div>
            </Col>
            <Col lg={6} className="hero-image" data-aos="fade-left">
              <div className="hero-image-container">
                <img
                  src="/Bluestone.jpeg"
                  alt="Bluestone IT Tech LLC"
                  className="img-fluid rounded-3 shadow-lg"
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
              <FaUsers className="trust-icon mb-2" />
              <h6 className="mb-0">Experienced Consultants</h6>
            </Col>
            <Col lg={3} md={6} className="mb-3 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
              <FaCogs className="trust-icon mb-2" />
              <h6 className="mb-0">Enterprise Solutions</h6>
            </Col>
            <Col lg={3} md={6} className="mb-3 mb-lg-0" data-aos="fade-up" data-aos-delay="300">
              <FaGlobe className="trust-icon mb-2" />
              <h6 className="mb-0">Offshore & Onsite Delivery</h6>
            </Col>
            <Col lg={3} md={6} data-aos="fade-up" data-aos-delay="400">
              <FaHandshake className="trust-icon mb-2" />
              <h6 className="mb-0">Client-Centric Approach</h6>
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
                Bluestone IT Tech LLC is a technology consulting firm delivering scalable and secure 
                IT solutions to global clients across multiple industries.
              </p>
              <div className="mb-3">
                <h5><FaCheckCircle className="text-primary me-2" /> Mission</h5>
                <p className="text-muted">
                  Empower businesses with reliable, scalable, and future-ready technology solutions.
                </p>
              </div>
              <div className="mb-4">
                <h5><FaCheckCircle className="text-primary me-2" /> Vision</h5>
                <p className="text-muted">
                  To become a trusted global IT partner known for innovation and excellence.
                </p>
              </div>
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
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaLightbulb />
                  </div>
                  <Card.Title>IT Consulting & Strategy</Card.Title>
                  <Card.Text>
                    Align technology with business goals through expert consulting.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaCogs />
                  </div>
                  <Card.Title>SAP Services</Card.Title>
                  <Card.Text>
                    SAP MM, SD, WM, SuccessFactors, implementation, upgrade, and support.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaCloud />
                  </div>
                  <Card.Title>Cloud & DevOps</Card.Title>
                  <Card.Text>
                    AWS, Azure, Kubernetes, CI/CD automation and cloud migration.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaDatabase />
                  </div>
                  <Card.Title>Data Engineering & Analytics</Card.Title>
                  <Card.Text>
                    Data pipelines, analytics, reporting, and BI solutions.
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

      {/* Industries We Serve */}
      <section className="industries-section py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Industries We Serve</h2>
              <p className="section-subtitle">
                Delivering specialized solutions across diverse sectors
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {['Healthcare', 'Retail & E-Commerce', 'Banking & Finance', 'Hi-Tech', 'Manufacturing'].map((industry, index) => (
              <Col lg={2} md={4} sm={6} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="industry-card text-center h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <FaTrophy className="industry-icon mb-3" />
                    <h6 className="mb-0">{industry}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
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
                  <FaAward />
                </div>
                <h5>Skilled & Certified Professionals</h5>
                <p>
                  Our team comprises certified specialists with deep industry knowledge and proven expertise.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaChartLine />
                </div>
                <h5>Proven Delivery Model</h5>
                <p>
                  Successful track record of delivering projects on time and within budget across global markets.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaGlobe />
                </div>
                <h5>Scalable Engagements</h5>
                <p>
                  Flexible engagement models that scale with your business needs and project requirements.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaShieldAlt />
                </div>
                <h5>Quality & Compliance</h5>
                <p>
                  Adherence to industry standards and best practices ensuring quality and compliance.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="500">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaHandshake />
                </div>
                <h5>Long-Term Partnerships</h5>
                <p>
                  We build lasting relationships focused on mutual success and continuous improvement.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="600">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaUsers />
                </div>
                <h5>Client-Centric Approach</h5>
                <p>
                  Your success is our priority. We listen, understand, and deliver solutions that matter.
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
              <h2 className="cta-title text-white">Let's Build the Right Technology for Your Business</h2>
              <p className="cta-description text-white mb-4">
                Partner with us to accelerate your digital transformation journey
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