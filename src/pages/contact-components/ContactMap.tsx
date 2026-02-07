import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactMap: React.FC = () => {
  return (
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
  );
};

export default ContactMap;