import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import EmailLink from '../../components/EmailLink';

const CareersContact: React.FC = () => {
  return (
    <section className="py-5">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto" data-aos="fade-up">
            <Card className="border-0 shadow-lg">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <div className="mb-3" style={{ fontSize: '3rem', color: '#667eea' }}>
                    <FaEnvelope />
                  </div>
                  <h3 className="mb-3">Get in Touch</h3>
                  <p className="text-muted">
                    Interested in joining our team? Reach out to us at just one click below.:
                  </p>
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
  );
};

export default CareersContact;