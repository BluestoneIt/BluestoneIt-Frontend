import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaUserTie,
  FaClock,
  FaCheckCircle
} from 'react-icons/fa';

const StaffingOverview: React.FC = () => {
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

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">IT Staffing & Talent Solutions</h2>
            <p className="lead text-muted">
              Bluestone IT Tech LLC has a valuable resource base with experience and skills in technologies that are critical in providing Business solutions. Companies remain dependent on Information Technology to maximize productivity, facilitate the exchange of information internally and externally, and ensure operational efficiencies. As a result, the demand continues for qualified Information Technology (IT) professionals.
            </p>
            <p className="text-muted">
              Over the years we have remained at the forefront of technology by recruiting, training and deploying top talent in emerging technologies. We have maintained elite vendor status with many of our clientele spanning various industries including Insurance, Financial Services, Government, Manufacturing and Pharmaceutical.
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

        {/* Value Proposition */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">How We Save Clients Time and Money</h3>
            <p className="lead text-muted text-center mb-4">
              We provide a variety of solutions to optimize your staffing needs:
            </p>
            <ul className="list-unstyled row">
              <li className="col-md-6 mb-3"><FaCheckCircle className="text-success me-3" />Accessing specialized technical skills on a per-project basis</li>
              <li className="col-md-6 mb-3"><FaCheckCircle className="text-success me-3" />Reducing payroll, benefits and personnel administration costs</li>
              <li className="col-md-6 mb-3"><FaCheckCircle className="text-success me-3" />Implementing just-in-time flexible staffing models</li>
              <li className="col-md-6 mb-3"><FaCheckCircle className="text-success me-3" />Reducing time-to-hire while improving quality-of-hire</li>
              <li className="col-md-6 mb-3"><FaCheckCircle className="text-success me-3" />Consolidating and centrally managing temporary staffing</li>
            </ul>
          </Col>
        </Row>

        {/* Core Competencies */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">Our Staffing Core Competencies</h3>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle className="text-primary me-3" />Full Life-Cycle Application Development</li>
                  <li className="mb-2"><FaCheckCircle className="text-primary me-3" />Software Quality Assurance & Software Quality Control</li>
                  <li className="mb-2"><FaCheckCircle className="text-primary me-3" />Database Design & Administration</li>
                  <li className="mb-2"><FaCheckCircle className="text-primary me-3" />Network Design, Implementation, Migration & Administration</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle className="text-primary me-3" />Data Warehousing</li>
                  <li className="mb-2"><FaCheckCircle className="text-primary me-3" />Internet/Intranet Architecture</li>
                  <li className="mb-2"><FaCheckCircle className="text-primary me-3" />Legacy Support & Migration</li>
                  <li className="mb-2"><FaCheckCircle className="text-primary me-3" />Regulatory Compliance (FDA)</li>
                </ul>
              </div>
            </div>
            <p className="text-muted mt-4">
              We recognize that in most cases, reducing turnover is an essential part of good human resources management. Our placement teams take the extra steps needed to help ensure appropriate staff assignments.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StaffingOverview;