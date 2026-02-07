import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useMetaTags } from '../hooks/useMetaTags';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';
import EmailLink from '../components/EmailLink';

const Contact: React.FC = () => {
  useMetaTags({
    title: 'Contact Us | Bluestone IT Tech LLC',
    description: 'Get in touch with Bluestone IT Tech LLC. Contact us for IT consulting, staffing solutions, and technology services. Located in Maple Valley, Washington.',
    keywords: 'contact IT company, IT consulting contact, technology services contact, Bluestone IT contact'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>

      {/* Page Header */}
      <section className="page-header">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="page-title" data-aos="fade-up">Contact Us</h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Let's discuss your project and bring your ideas to life
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <Container>
          <Row>
            {/* Contact Information */}
            <Col lg={4} className="mb-5">
              <div className="contact-info-section" data-aos="fade-right">
                <h3 className="mb-4">Get in Touch</h3>
                <p className="mb-4">
                  Ready to transform your business with cutting-edge technology solutions? 
                  We're here to help you succeed.
                </p>

                <div className="contact-info-item mb-4">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h6>Headquarters</h6>
                    <p>29010 239th Ave SE<br />Maple Valley, Washington 98010<br />United States</p>
                  </div>
                </div>

                <div className="contact-info-item mb-4">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h6>Phone Number</h6>
                    <p>+1-484-521-1051</p>
                  </div>
                </div>

                <div className="contact-info-item mb-4">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h6>Email Address</h6>
                    <p><EmailLink email="info@bluestoneittech.com" /></p>
                  </div>
                </div>

                <div className="contact-info-item mb-4">
                  <div className="contact-icon">
                    <FaClock />
                  </div>
                  <div className="contact-details">
                    <h6>Business Hours</h6>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </Col>

            {/* Contact Form */}
            <Col lg={8}>
              <Card className="contact-form-card shadow" data-aos="fade-left">
                <Card.Body className="p-4">
                  <h3 className="mb-4">Send us a Message</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Subject *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter message subject"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label>Message *</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        required
                      />
                    </Form.Group>

                    <Button type="submit" size="lg" className="contact-submit-btn">
                      <FaPaperPlane className="me-2" />
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="map-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-4" data-aos="fade-up">
              <h3>Find Us on the Map</h3>
              <p>Visit our office for a face-to-face consultation</p>
            </Col>
          </Row>
          <Row>
            <Col lg={12} data-aos="fade-up" data-aos-delay="100">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.845!2d-122.036926!3d47.373348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIyJzI0LjEiTiAxMjLCsDAyJzEyLjkiVw!5e0!3m2!1sen!2sus!4v1642678901234!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bluestone IT Tech LLC - Maple Valley, Washington"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="contact-cta py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center" data-aos="fade-up">
              <h3 className="text-white mb-3">Ready to Start Your Project?</h3>
              <p className="text-white mb-4">
                Join the growing list of satisfied clients who trust Bluestone IT 
                for their technology needs.
              </p>
              <Button variant="light" size="lg" href="tel:+14845211051">
                Call Now: +1-484-521-1051
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;