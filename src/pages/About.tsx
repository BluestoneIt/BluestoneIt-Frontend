import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaBullseye, FaHandshake, FaLightbulb, FaUsers, FaRocket, FaCheckCircle, FaAward } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="page-title" data-aos="fade-up">About Bluestone IT Tech LLC</h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Committed to delivering high-quality IT solutions that help organizations grow, innovate, and stay competitive
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4" data-aos="fade-right">
              <h2 className="section-title">Who We Are</h2>
              <p className="lead mb-4">
                <strong>Bluestone IT Technologies LLC</strong> is committed to delivering high-quality IT solutions 
                that help organizations grow, innovate, and stay competitive in a rapidly evolving digital world.
              </p>
              <p>
                We are a technology consulting firm delivering scalable and secure IT solutions to global 
                clients across multiple industries. Our expertise spans SAP, Cloud, DevOps, Data Engineering, 
                Application Development, and IT Staffing.
              </p>
              <p>
                We help organizations accelerate growth through innovative technology solutions, expert consulting, 
                and reliable offshore and onsite delivery models. Our team comprises certified specialists with 
                deep industry knowledge and proven expertise.
              </p>
              <p>
                It is no coincidence that the name <strong>Bluestone IT Technologies LLC</strong> has become 
                synonymous with quality and committed service delivery of technology solutions to our valued clients.
              </p>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="hero-image-container">
                <img
                  src="/BluestoneUpdateLogoITTech.png"
                  alt="Bluestone IT Tech LLC"
                  className="img-fluid rounded-3 shadow"
                  style={{ marginTop: '-10px', height: '500px', width: '600px', objectFit: 'cover', borderRadius: '50%',  backgroundColor: '#f1f1f1' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="experts-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Core Values</h2>
              <p className="section-subtitle">
                The principles that guide everything we do
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card className="expert-card h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="expert-icon mb-3">
                    <FaAward />
                  </div>
                  <Card.Title>Integrity</Card.Title>
                  <Card.Text>
                    We operate with honesty and transparency in everything we do
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="expert-card h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="expert-icon mb-3">
                    <FaLightbulb />
                  </div>
                  <Card.Title>Innovation</Card.Title>
                  <Card.Text>
                    We embrace new ideas and continuously seek better solutions
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <Card className="expert-card h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="expert-icon mb-3">
                    <FaRocket />
                  </div>
                  <Card.Title>Excellence</Card.Title>
                  <Card.Text>
                    We strive for the highest quality in our work and services
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={3} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <Card className="expert-card h-100 border-0 shadow-sm text-center">
                <Card.Body className="p-4">
                  <div className="expert-icon mb-3">
                    <FaHandshake />
                  </div>
                  <Card.Title>Collaboration</Card.Title>
                  <Card.Text>
                    We work together to achieve common goals and mutual success
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section py-5">
        <Container>
          <Row>
            <Col lg={6} className="mb-4" data-aos="fade-right">
              <Card className="h-100 border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="mission-icon mb-3">
                    <FaBullseye />
                  </div>
                  <h2 className="section-title">Mission</h2>
                  <p className="lead">
                    Empower businesses with reliable, scalable, and future-ready technology solutions.
                  </p>
                  <ul className="list-unstyled mt-4">
                    <li className="mb-3">
                      <FaCheckCircle className="text-success me-2" />
                      Help clients achieve critical business objectives
                    </li>
                    <li className="mb-3">
                      <FaCheckCircle className="text-success me-2" />
                      Set new standards in IT project delivery & service
                    </li>
                    <li className="mb-3">
                      <FaCheckCircle className="text-success me-2" />
                      Transform operations through strategic technology implementation
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4" data-aos="fade-left">
              <Card className="h-100 border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="vision-icon mb-3">
                    <FaEye />
                  </div>
                  <h2 className="section-title">Vision</h2>
                  <p className="lead">
                    To become a trusted global IT partner known for innovation and excellence.
                  </p>
                  <ul className="list-unstyled mt-4">
                    <li className="mb-3">
                      <FaCheckCircle className="text-success me-2" />
                      Lead the market in quality and innovation
                    </li>
                    <li className="mb-3">
                      <FaCheckCircle className="text-success me-2" />
                      Build long-lasting partnerships worldwide
                    </li>
                    <li className="mb-3">
                      <FaCheckCircle className="text-success me-2" />
                      Continuously evolve with emerging technologies
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* What We Do Section */}
      <section className="journey-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <div className="journey-icon mb-3">
                <FaUsers />
              </div>
              <h2 className="section-title">What We Deliver</h2>
              <p className="section-subtitle mb-4">
                Comprehensive IT solutions that drive business growth
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="journey-content" data-aos="fade-up" data-aos-delay="100">
                <p className="lead">
                  Bluestone IT Tech LLC helps organizations accelerate growth through innovative technology 
                  solutions, expert consulting, and reliable offshore and onsite delivery models.
                </p>
                <Row className="mt-4">
                  <Col md={6} className="mb-3">
                    <div className="journey-point">
                      <h6>✓ Enterprise Solutions</h6>
                      <p>SAP implementation, upgrades, and support services</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="journey-point">
                      <h6>✓ Cloud & DevOps</h6>
                      <p>AWS, Azure, Kubernetes, and automation solutions</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="journey-point">
                      <h6>✓ Data & Analytics</h6>
                      <p>Data pipelines, BI solutions, and advanced analytics</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="journey-point">
                      <h6>✓ IT Staffing</h6>
                      <p>Offshore and onsite talent delivery for all technology needs</p>
                    </div>
                  </Col>
                </Row>
                <div className="text-center mt-5">
                  <Link to="/services" className="btn btn-primary btn-lg me-3">
                    Explore Our Services
                  </Link>
                  <Link to="/contact" className="btn btn-outline-primary btn-lg">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;