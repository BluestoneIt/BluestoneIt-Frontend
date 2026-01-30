import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import EmailLink from './EmailLink';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="custom-footer">
      <Container>
        <Row className="py-5">
          <Col lg={4} md={6} className="mb-4">
            <div className="footer-brand">
              <img
                src="/Bluestone.jpeg"
                alt="Bluestone IT"
                height="50"
                className="footer-logo mb-3"
              />
              <h5 className="text-white mb-3">Bluestone IT</h5>
              <p className="text-light">
                Leading the digital transformation with innovative IT solutions and exceptional service delivery. 
                Your trusted partner for technology excellence.
              </p>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h6 className="text-white mb-3">Services</h6>
            <ul className="list-unstyled footer-links">
              <li><a href="#web-development">Web Development</a></li>
              <li><a href="#mobile-apps">Mobile Applications</a></li>
              <li><a href="#cloud-solutions">Cloud Solutions</a></li>
              <li><a href="#it-consulting">IT Consulting</a></li>
              <li><a href="#digital-transformation">Digital Transformation</a></li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <h6 className="text-white mb-3">Contact Info</h6>
            <div className="contact-info">
              <div className="contact-item mb-2">
                <FaMapMarkerAlt className="me-2" />
                <span>123 Tech Street, Innovation City, TC 12345</span>
              </div>
              <div className="contact-item mb-2">
                <FaPhone className="me-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item mb-3">
                <FaEnvelope className="me-2" />
                <EmailLink email="info@bluestoneit.com" />
              </div>
              <div className="social-links">
                <a href="#" className="social-link me-2"><FaFacebookF /></a>
                <a href="#" className="social-link me-2"><FaTwitter /></a>
                <a href="#" className="social-link me-2"><FaLinkedinIn /></a>
                <a href="#" className="social-link"><FaInstagram /></a>
              </div>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="py-3">
          <Col lg={6} md={6} className="text-start">
            <p className="mb-0 text-light">
              &copy; {currentYear} Bluestone IT. All rights reserved.
            </p>
          </Col>
          <Col lg={6} md={6} className="text-end">
            <p className="mb-0 text-light">
              <a href="/privacy-policy" className="footer-link me-3">Privacy Policy</a>
              <a href="/terms-conditions" className="footer-link">Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;