import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import EmailLink from '../../components/EmailLink';

const VendorsCTA: React.FC = () => {
  return (
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
  );
};

export default VendorsCTA;