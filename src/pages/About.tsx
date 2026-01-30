import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaEye, FaBullseye, FaHandshake, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="page-title" data-aos="fade-up">About Bluestone IT</h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Discover our journey, mission, and commitment to excellence
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
                <strong>Bluestone IT</strong> was established in 2019 with a vision to revolutionize 
                the digital landscape through innovative technology solutions.
              </p>
              <p>
                Bluestone IT ensures that our clients are able to create as well as deploy a 
                multitude of internet services that allow them to stay much ahead of changing 
                market demands. We also make sure that our clients take full advantage of 
                emerging next-generation enterprise solutions for medium and small companies.
              </p>
              <p>
                We are able to achieve this as our team comprises of absolute specialists in 
                software development, integration and implementation. Having expertise in 
                industry knowledge, Bluestone IT helps customers translate business requirements 
                into present-day fast-paced market solutions and future-proof technologies.
              </p>
              <p>
                It is no coincidence that the name <strong>Bluestone IT</strong> has become 
                synonymous with quality and committed service delivery of technology and 
                personnel solutions to our clients.
              </p>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="about-image-container">
                <img
                  src="/Bluestone.jpeg"
                  alt="Bluestone IT Team"
                  className="img-fluid rounded-3 shadow"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experts Section */}
      <section className="experts-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <h2 className="section-title">Experts Are Behind Everything We Do</h2>
              <p className="section-subtitle">
                We deliver what we promise, and this has been our guiding principle since inception.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card className="expert-card h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="expert-icon mb-3">
                    <FaUsers />
                  </div>
                  <Card.Title>Specialized Team</Card.Title>
                  <Card.Text>
                    Our team comprises absolute specialists in software development, 
                    integration, and implementation with deep industry expertise.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="expert-card h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="expert-icon mb-3">
                    <FaLightbulb />
                  </div>
                  <Card.Title>Innovation Focus</Card.Title>
                  <Card.Text>
                    Our vision is to improve human quality of life through relentless 
                    innovation in business and technological processes and practices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <Card className="expert-card h-100 border-0 shadow-sm">
                <Card.Body className="text-center">
                  <div className="expert-icon mb-3">
                    <FaHandshake />
                  </div>
                  <Card.Title>Client Partnership</Card.Title>
                  <Card.Text>
                    We understand the special needs and intricacies of our clients, 
                    providing apt solutions that bridge technology gaps effectively.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="mission-section py-5">
        <Container>
          <Row>
            <Col lg={6} className="mb-4" data-aos="fade-right">
              <div className="mission-content">
                <div className="mission-icon mb-3">
                  <FaBullseye />
                </div>
                <h2 className="section-title">Our Mission</h2>
                <div className="mission-list">
                  <div className="mission-item mb-3">
                    <h5>Help Clients Achieve Critical Business Objectives</h5>
                    <p>We partner with businesses to identify and accomplish their most important goals through strategic technology implementation.</p>
                  </div>
                  <div className="mission-item mb-3">
                    <h5>Setting New Standards in IT Project Delivery & Service</h5>
                    <p>We continuously raise the bar for quality, efficiency, and innovation in how technology projects are conceived, developed, and delivered.</p>
                  </div>
                  <div className="mission-item mb-3">
                    <h5>Transforming Lives by Collaborating with Clients</h5>
                    <p>Through meaningful partnerships, we create solutions that not only solve technical challenges but also improve business processes and user experiences.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="vision-content">
                <div className="vision-icon mb-3">
                  <FaEye />
                </div>
                <h2 className="section-title">Our Vision</h2>
                <p className="lead mb-4">
                  Bluestone IT is the outcome of the ever-growing need for information technology, 
                  which has definitely defied conventional approaches to technology and consulting services.
                </p>
                <p>
                  We at Bluestone IT are committed to leveraging information technology for better 
                  performance as we make every effort to understand the special needs and intricacies 
                  of our clients.
                </p>
                <p>
                  Our delivery processes and apt solutions are the sources of high technology, 
                  bridging the gap between innovation and practical application for our cherished clients.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Journey Section */}
      <section className="journey-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5" data-aos="fade-up">
              <div className="journey-icon mb-3">
                <FaRocket />
              </div>
              <h2 className="section-title">Our Journey</h2>
              <p className="section-subtitle mb-4">
                A testament to growth, innovation, and unwavering commitment to excellence
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="journey-content" data-aos="fade-up" data-aos-delay="100">
                <p className="lead">
                  Bluestone IT has indeed come a long way in setting high standards in technology 
                  and consulting services and has certainly proved to be a force to reckon with 
                  since its inception.
                </p>
                <p>
                  As of now, Bluestone IT enjoys a dominant presence on account of constant 
                  delivery of innovation, quality, consistency, as well as value for money. 
                  Our journey reflects our dedication to:
                </p>
                <Row className="mt-4">
                  <Col md={6} className="mb-3">
                    <div className="journey-point">
                      <h6>✓ Continuous Innovation</h6>
                      <p>Staying ahead of technology trends and implementing cutting-edge solutions.</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="journey-point">
                      <h6>✓ Unwavering Quality</h6>
                      <p>Maintaining the highest standards in every project we undertake.</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="journey-point">
                      <h6>✓ Consistent Delivery</h6>
                      <p>Meeting deadlines and exceeding expectations on every engagement.</p>
                    </div>
                  </Col>
                  <Col md={6} className="mb-3">
                    <div className="journey-point">
                      <h6>✓ Value for Money</h6>
                      <p>Providing cost-effective solutions that deliver measurable business results.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;