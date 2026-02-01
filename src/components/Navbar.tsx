import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, NavDropdown } from 'react-bootstrap';
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
        <div className="d-flex align-items-center">
          <BootstrapNavbar.Brand as={Link} to="/" onClick={handleNavClose}>
            <img
              src="/BlueStoreIt.png"
              alt="Bluestone IT Tech LLC"
              className="navbar-logo"
            />
          </BootstrapNavbar.Brand>
          <h5 className="brand-text ms-0 mb-0">Bluestone IT Tech LLC</h5>
        </div>
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
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/services" onClick={handleNavClose}>
                All Services
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/staffing" onClick={handleNavClose}>
                IT Staffing
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vendors" onClick={handleNavClose}>
                For Vendors
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/bench-sales" onClick={handleNavClose}>
                Bench Sales
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/careers"
              onClick={handleNavClose}
              className={location.pathname === '/careers' ? 'active' : ''}
            >
              Careers
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