import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaCloud, FaChartLine, FaUsers, FaAward } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content" data-aos="fade-up">
              <h1 className="hero-title">
                Transforming Ideas into 
                <span className="text-primary"> Digital Reality</span>
              </h1>
              <p className="hero-description lead">
                At Bluestone IT, we deliver cutting-edge technology solutions that drive business growth. 
                From innovative web applications to comprehensive digital transformation, we're your 
                trusted partner in the digital age.
              </p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary btn-lg me-3 mb-3">
                  Get Started
                </Link>
                <Link to="/about" className="btn btn-outline-primary btn-lg mb-3">
                  Learn More
                </Link>
              </div>
            </Col>
            <Col lg={6} className="hero-image" data-aos="fade-left">
              <div className="hero-image-container">
                <img
                  src="/Bluestone.jpeg"
                  alt="Bluestone IT Solutions"
                  className="img-fluid rounded-3 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services-section py-5" id="services">
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
                    <FaCode />
                  </div>
                  <Card.Title>Web Development</Card.Title>
                  <Card.Text>
                    Custom web applications built with modern technologies. Responsive, 
                    scalable, and user-friendly solutions for your digital presence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className="service-icon mb-3">
                    <FaMobile />
                  </div>
                  <Card.Title>Mobile Applications</Card.Title>
                  <Card.Text>
                    Native and cross-platform mobile apps that engage users and drive 
                    business results across iOS and Android platforms.
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
                  <Card.Title>Cloud Solutions</Card.Title>
                  <Card.Text>
                    Secure, scalable cloud infrastructure and migration services. 
                    Optimize your operations with modern cloud technologies.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="stats-section py-5">
        <Container>
          <Row>
            <Col lg={3} md={6} className="text-center mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="text-center mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="text-center mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="text-center mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Why Choose Bluestone IT?</h2>
              <p className="section-subtitle">
                We combine expertise, innovation, and dedication to deliver exceptional results
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaUsers />
                </div>
                <h5>Expert Team</h5>
                <p>
                  Our team comprises absolute specialists in software development, 
                  integration and implementation with deep industry knowledge.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaChartLine />
                </div>
                <h5>Proven Results</h5>
                <p>
                  We deliver what we promise. Our vision is to improve business quality 
                  through relentless innovation in technology processes.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-item">
                <div className="feature-icon mb-3">
                  <FaAward />
                </div>
                <h5>Quality Commitment</h5>
                <p>
                  Bluestone IT has become synonymous with quality and committed service 
                  delivery of technology solutions to our valued clients.
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
              <h2 className="cta-title text-white">Ready to Transform Your Business?</h2>
              <p className="cta-description text-white mb-4">
                Let's discuss how Bluestone IT can help you achieve your digital goals 
                and stay ahead of the competition.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg">
                Start Your Project Today
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;