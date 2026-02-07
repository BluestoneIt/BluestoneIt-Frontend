import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactHeader from './contact-components/ContactHeader';
import ContactInfo from './contact-components/ContactInfo';
import ContactForm from './contact-components/ContactForm';
import ContactMap from './contact-components/ContactMap';
import ContactCTA from './contact-components/ContactCTA';

const Contact: React.FC = () => {
  return (
    <>
      <ContactHeader />

      <section className="contact-section py-5">
        <Container>
          <Row>
            <Col lg={4} className="mb-5">
              <ContactInfo />
            </Col>

            <Col lg={8}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>

      <ContactMap />
      <ContactCTA />
    </>
  );
};

export default Contact;