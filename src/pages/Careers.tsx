import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useMetaTags } from '../hooks/useMetaTags';
import {
  FaBriefcase,
  FaTrophy,
  FaDollarSign,
  FaGlobeAmericas,
  FaEnvelope,
  FaCheckCircle
} from 'react-icons/fa';
import EmailLink from '../components/EmailLink';

const Careers: React.FC = () => {
  const benefits = [
    {
      icon: <FaBriefcase />,
      title: 'Growth-Oriented Culture',
      description: 'Continuous learning and career advancement opportunities'
    },
    {
      icon: <FaTrophy />,
      title: 'Challenging Projects',
      description: 'Work on cutting-edge technologies with global clients'
    },
    {
      icon: <FaDollarSign />,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and comprehensive benefits'
    },
    {
      icon: <FaGlobeAmericas />,
      title: 'Global Exposure',
      description: 'Collaborate with international teams and diverse projects'
    }
  ];

  const openings = [
    {
      title: 'SAP Consultant',
      type: 'Full-Time',
      location: 'Remote / Onsite'
    },
    {
      title: 'Cloud & DevOps Engineer',
      type: 'Full-Time',
      location: 'Remote / Onsite'
    },
    {
      title: 'Data Engineer',
      type: 'Full-Time',
      location: 'Remote / Onsite'
    },
    {
      title: 'Full Stack Developer',
      type: 'Full-Time / Contract',
      location: 'Remote / Onsite'
    },
    {
      title: 'QA Automation Engineer',
      type: 'Contract',
      location: 'Remote'
    },
    {
      title: 'Business Analyst',
      type: 'Full-Time',
      location: 'Onsite'
    }
  ];

  useMetaTags({
    title: 'Careers | Bluestone IT Tech LLC',
    description: 'Join our team at Bluestone IT Tech LLC. We offer growth-oriented culture, challenging projects, competitive compensation, and global exposure opportunities.',
    keywords: 'IT careers, job opportunities, IT consulting jobs, technology careers, software development jobs'
  });

  return (
    <>

      {/* Page Header */}
      <section className="page-header">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="page-title" data-aos="fade-up">
                Join Our Team
              </h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Build your career with a company that values innovation, excellence, and growth
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Work With Us */}
      <section className="py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Why Work With Us?</h2>
              <p className="lead text-muted">
                We are always looking for passionate professionals to join our growing team
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {benefits.map((benefit, index) => (
              <Col lg={3} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="text-center h-100 border-0 shadow-sm hover-shadow">
                  <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem', color: '#667eea' }}>
                      {benefit.icon}
                    </div>
                    <Card.Title className="h5 mb-3">{benefit.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {benefit.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Current Openings */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center" data-aos="fade-up">
              <h2 className="display-5 fw-bold mb-4">Current Openings</h2>
              <p className="lead text-muted">
                Explore opportunities across various technology domains
              </p>
            </Col>
          </Row>

          <Row className="g-4">
            {openings.map((opening, index) => (
              <Col lg={4} md={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card className="h-100 border-0 shadow-sm hover-shadow">
                  <Card.Body className="p-4">
                    <Card.Title className="h5 mb-3">{opening.title}</Card.Title>
                    <div className="mb-2">
                      <FaCheckCircle className="text-success me-2" />
                      <span className="text-muted">{opening.type}</span>
                    </div>
                    <div className="mb-3">
                      <FaCheckCircle className="text-success me-2" />
                      <span className="text-muted">{opening.location}</span>
                    </div>
                    <Button variant="outline-primary" className="w-100">
                      Apply Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Application Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={6} className="mx-auto" data-aos="fade-up">
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-5">
                  <div className="text-center mb-4">
                    <div className="mb-3" style={{ fontSize: '3rem', color: '#667eea' }}>
                      <FaEnvelope />
                    </div>
                    <h3 className="mb-3">Submit Your Resume</h3>
                    <p className="text-muted">
                      Don't see a perfect fit? Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                  </div>

                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name *</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control type="email" placeholder="your.email@example.com" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number *</Form.Label>
                      <Form.Control type="tel" placeholder="+1 (555) 123-4567" required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Position Applied For</Form.Label>
                      <Form.Select>
                        <option value="">Select a position</option>
                        {openings.map((opening, index) => (
                          <option key={index} value={opening.title}>
                            {opening.title}
                          </option>
                        ))}
                        <option value="other">Other</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Resume/CV *</Form.Label>
                      <Form.Control type="file" accept=".pdf,.doc,.docx" required />
                      <Form.Text className="text-muted">
                        Upload your resume in PDF or DOC format (Max 5MB)
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Cover Letter / Additional Information</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        placeholder="Tell us about yourself and why you'd be a great fit..."
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100" size="lg">
                      Submit Application
                    </Button>
                  </Form>

                  <div className="text-center mt-4">
                    <p className="text-muted mb-2">Or email your resume directly to:</p>
                    <div className="h5">
                      <EmailLink email="careers@bluestoneittech.com" />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Culture */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">Our Culture</h2>
              <p className="lead text-muted mb-4">
                At Bluestone IT Tech LLC, we foster an environment where innovation thrives and 
                every team member's contribution is valued.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-3" />
                  <span className="h6">Collaborative team environment</span>
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-3" />
                  <span className="h6">Continuous learning opportunities</span>
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-3" />
                  <span className="h6">Work-life balance</span>
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-3" />
                  <span className="h6">Recognition and rewards</span>
                </li>
                <li className="mb-3">
                  <FaCheckCircle className="text-success me-3" />
                  <span className="h6">Diverse and inclusive workplace</span>
                </li>
              </ul>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <Card className="border-0 shadow-lg bg-gradient text-white">
                <Card.Body className="p-5">
                  <h3 className="mb-4">Core Values</h3>
                  <div className="mb-4">
                    <h5 className="mb-2">Integrity</h5>
                    <p>We operate with honesty and transparency in everything we do</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="mb-2">Innovation</h5>
                    <p>We embrace new ideas and continuously seek better solutions</p>
                  </div>
                  <div className="mb-4">
                    <h5 className="mb-2">Excellence</h5>
                    <p>We strive for the highest quality in our work and services</p>
                  </div>
                  <div>
                    <h5 className="mb-2">Collaboration</h5>
                    <p>We work together to achieve common goals and mutual success</p>
                  </div>
                </Card.Body>
              </Card>
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

export default Careers;
