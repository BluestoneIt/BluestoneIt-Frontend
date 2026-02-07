import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUsers, FaCogs, FaCode, FaDatabase } from 'react-icons/fa';

const HomeServicesOverview: React.FC = () => {
  return (
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
  );
};

export default HomeServicesOverview;