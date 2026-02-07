import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ContactCTA: React.FC = () => {
  return (
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
  );
};

export default ContactCTA;