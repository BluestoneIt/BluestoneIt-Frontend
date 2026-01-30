import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavClose = () => {
    setExpanded(false);
  };

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={handleNavToggle}
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" onClick={handleNavClose}>
          <img
            src="/Bluestone.jpeg"
            alt="Bluestone IT"
            height="45"
            className="d-inline-block align-top navbar-logo"
          />
          <span className="brand-text ms-2">Bluestone IT</span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          {expanded ? <FaTimes /> : <FaBars />}
        </BootstrapNavbar.Toggle>

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleNavClose}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={handleNavClose}
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={handleNavClose}
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;