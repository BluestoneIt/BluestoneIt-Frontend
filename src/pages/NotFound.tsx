import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';
import { useMetaTags } from '../hooks/useMetaTags';

const NotFound: React.FC = () => {
  useMetaTags({
    title: '404 Not Found | Bluestone IT Tech LLC',
    description: 'The page you are looking for does not exist. Return to the homepage or contact support for assistance.',
    keywords: '404, page not found, Bluestone IT Tech LLC, error'
  });

  return (
    <div className="not-found-page">
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col lg={6} className="text-center">
            <div className="not-found-content" data-aos="fade-up">
              <div className="not-found-icon mb-4">
                <FaExclamationTriangle />
              </div>
              <h1 className="not-found-title">404</h1>
              <h2 className="not-found-subtitle mb-4">Page Not Found</h2>
              <p className="not-found-description mb-4">
                Sorry, the page you are looking for doesn't exist or has been moved.
                Let's get you back to where you need to be.
              </p>
              <div className="not-found-buttons">
                <Link to="/" className="btn btn-primary btn-lg me-3 mb-3">
                  <FaHome className="me-2" />
                  Back to Home
                </Link>
                <Link to="/contact" className="btn btn-outline-primary btn-lg mb-3">
                  Contact Support
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;