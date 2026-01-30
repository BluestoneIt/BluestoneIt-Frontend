import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import EmailLink from '../components/EmailLink';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="page-title" data-aos="fade-up">Privacy Policy</h1>
              <p className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                How we protect and handle your personal information
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Privacy Policy Content */}
      <section className="privacy-policy-section py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <Card className="shadow-sm border-0" data-aos="fade-up">
                <Card.Body className="p-4 p-md-5">
                  <div className="privacy-content">
                    <div className="last-updated mb-4">
                      <p className="text-muted"><strong>Last Updated:</strong> January 30, 2026</p>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">1. Introduction</h2>
                      <p>
                        At Bluestone IT, we are committed to protecting your privacy and ensuring the security of your personal information.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website,
                        use our services, or interact with us.
                      </p>
                      <p>
                        By using our services, you agree to the collection and use of information in accordance with this policy.
                        We will not use or share your information with anyone except as described in this Privacy Policy.
                      </p>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">2. Information We Collect</h2>

                      <h4 className="subsection-title mb-3">2.1 Personal Information</h4>
                      <p>We may collect the following types of personal information:</p>
                      <ul className="privacy-list">
                        <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                        <li><strong>Business Information:</strong> Company name, job title, business address</li>
                        <li><strong>Communication Data:</strong> Messages, inquiries, and feedback you send to us</li>
                        <li><strong>Technical Information:</strong> IP address, browser type, device information</li>
                      </ul>

                      <h4 className="subsection-title mb-3 mt-4">2.2 How We Collect Information</h4>
                      <ul className="privacy-list">
                        <li><strong>Direct Collection:</strong> When you contact us, subscribe to our newsletter, or use our services</li>
                        <li><strong>Website Analytics:</strong> Through cookies and similar technologies</li>
                        <li><strong>Third-Party Sources:</strong> Publicly available information or business partners</li>
                      </ul>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">3. How We Use Your Information</h2>
                      <p>We use the information we collect for the following purposes:</p>
                      <ul className="privacy-list">
                        <li><strong>Service Delivery:</strong> To provide IT consulting, development, and support services</li>
                        <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
                        <li><strong>Business Development:</strong> To send you information about our services and industry updates</li>
                        <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                        <li><strong>Website Improvement:</strong> To analyze website usage and improve user experience</li>
                      </ul>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">4. Information Sharing and Disclosure</h2>
                      <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
                      <ul className="privacy-list">
                        <li><strong>Service Providers:</strong> Trusted third-party service providers who assist us in operating our business</li>
                        <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                        <li><strong>Consent:</strong> With your explicit consent</li>
                      </ul>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">5. Data Security</h2>
                      <p>
                        We implement appropriate technical and organizational security measures to protect your personal information against
                        unauthorized access, alteration, disclosure, or destruction. These measures include:
                      </p>
                      <ul className="privacy-list">
                        <li>SSL/TLS encryption for data transmission</li>
                        <li>Secure data storage and access controls</li>
                        <li>Regular security assessments and updates</li>
                        <li>Employee training on data protection</li>
                        <li>Incident response procedures</li>
                      </ul>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">6. Cookies and Tracking Technologies</h2>
                      <p>
                        We use cookies and similar technologies to enhance your browsing experience, analyze website traffic,
                        and personalize content. You can control cookie settings through your browser preferences.
                      </p>
                      <p>
                        <strong>Types of Cookies We Use:</strong>
                      </p>
                      <ul className="privacy-list">
                        <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                        <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                      </ul>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">7. Your Rights and Choices</h2>
                      <p>You have the following rights regarding your personal information:</p>
                      <ul className="privacy-list">
                        <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                        <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                        <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                      </ul>
                      <p>To exercise these rights, please contact us using the information provided below.</p>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">8. Data Retention</h2>
                      <p>
                        We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy,
                        unless a longer retention period is required by law. When we no longer need your information, we will securely delete or anonymize it.
                      </p>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">9. International Data Transfers</h2>
                      <p>
                        Your information may be transferred to and processed in countries other than your own. We ensure that such transfers
                        comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                      </p>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">10. Third-Party Links</h2>
                      <p>
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content
                        of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                      </p>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">11. Children's Privacy</h2>
                      <p>
                        Our services are not intended for children under 13 years of age. We do not knowingly collect personal information
                        from children under 13. If we become aware that we have collected personal information from a child under 13,
                        we will take steps to delete such information.
                      </p>
                    </div>

                    <div className="privacy-section mb-5">
                      <h2 className="section-title mb-3">12. Changes to This Privacy Policy</h2>
                      <p>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                        We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date.
                      </p>
                    </div>

                    <div className="privacy-section">
                      <h2 className="section-title mb-3">13. Contact Us</h2>
                      <p>
                        If you have any questions about this Privacy Policy or our data practices, please contact us:
                      </p>
                      <div className="contact-info mt-3">
                        <p><strong>Bluestone IT</strong></p>
                        <p>123 Tech Innovation Drive<br />
                        Digital City, TC 12345<br />
                        United States</p>
                        <p><strong>Email:</strong> <EmailLink email="info@bluestoneit.com" /></p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPolicy;