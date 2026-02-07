import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TermsContent: React.FC = () => {
  return (
    <section className="terms-conditions-section py-5">
      <Container>
        <Row>
          <Col lg={10} className="mx-auto">
            <Card className="shadow-sm border-0" data-aos="fade-up">
              <Card.Body className="p-4 p-md-5">
                <div className="terms-content">
                  <div className="last-updated mb-4">
                    <p className="text-muted"><strong>Last Updated:</strong> January 30, 2026</p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">1. Acceptance of Terms</h2>
                    <p>
                      Welcome to Bluestone IT. These Terms and Conditions ("Terms") govern your use of our website,
                      services, and any related interactions with Bluestone IT. By accessing or using our services,
                      you agree to be bound by these Terms.
                    </p>
                    <p>
                      If you do not agree to these Terms, please do not use our services. We reserve the right to
                      modify these Terms at any time, and your continued use of our services constitutes acceptance
                      of the updated Terms.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">2. Services Description</h2>
                    <p>Bluestone IT provides the following services:</p>
                    <ul className="terms-list">
                      <li><strong>IT Consulting:</strong> Technology strategy, system architecture, and digital transformation guidance</li>
                      <li><strong>Web Development:</strong> Custom website design, development, and maintenance</li>
                      <li><strong>Mobile Applications:</strong> Native and cross-platform mobile app development</li>
                      <li><strong>Cloud Solutions:</strong> Cloud migration, infrastructure setup, and management</li>
                      <li><strong>IT Support:</strong> Technical support, system maintenance, and troubleshooting</li>
                      <li><strong>Digital Marketing:</strong> SEO optimization, content strategy, and online presence management</li>
                    </ul>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">3. User Responsibilities</h2>

                    <h4 className="subsection-title mb-3">3.1 Account Information</h4>
                    <p>When using our services, you agree to:</p>
                    <ul className="terms-list">
                      <li>Provide accurate and complete information</li>
                      <li>Maintain the confidentiality of your account credentials</li>
                      <li>Notify us immediately of any unauthorized use</li>
                      <li>Accept responsibility for all activities under your account</li>
                    </ul>

                    <h4 className="subsection-title mb-3 mt-4">3.2 Acceptable Use</h4>
                    <p>You agree not to use our services to:</p>
                    <ul className="terms-list">
                      <li>Violate any applicable laws or regulations</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Transmit harmful or malicious code</li>
                      <li>Attempt to gain unauthorized access to systems</li>
                      <li>Distribute spam or unsolicited communications</li>
                      <li>Interfere with service availability or performance</li>
                    </ul>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">4. Intellectual Property Rights</h2>

                    <h4 className="subsection-title mb-3">4.1 Our Intellectual Property</h4>
                    <p>
                      All content, features, and functionality of our services, including but not limited to text,
                      graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by
                      Bluestone IT or its licensors and are protected by copyright, trademark, and other intellectual
                      property laws.
                    </p>

                    <h4 className="subsection-title mb-3 mt-4">4.2 Client Intellectual Property</h4>
                    <p>
                      When you provide content or materials to us for use in our services, you retain ownership
                      of your intellectual property rights. By providing such materials, you grant us a
                      non-exclusive, royalty-free license to use, modify, and display the materials solely
                      for the purpose of providing our services to you.
                    </p>

                    <h4 className="subsection-title mb-3 mt-4">4.3 Deliverables</h4>
                    <p>
                      Upon full payment for our services, we grant you a non-exclusive, perpetual license to use,
                      modify, and distribute the deliverables we create for you, subject to the terms of our
                      service agreement.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">5. Service Fees and Payment</h2>

                    <h4 className="subsection-title mb-3">5.1 Fees</h4>
                    <p>
                      Service fees are as agreed upon in our service agreements or project proposals.
                      All fees are exclusive of applicable taxes, which will be charged additionally.
                    </p>

                    <h4 className="subsection-title mb-3 mt-4">5.2 Payment Terms</h4>
                    <ul className="terms-list">
                      <li>Payment is due according to the terms specified in our agreement</li>
                      <li>Late payments may incur interest charges at 1.5% per month</li>
                      <li>We reserve the right to suspend services for non-payment</li>
                      <li>All payments are non-refundable unless otherwise specified</li>
                    </ul>

                    <h4 className="subsection-title mb-3 mt-4">5.3 Refund Policy</h4>
                    <p>
                      Refunds are provided at our discretion based on the nature of the service and the
                      circumstances of the request. Custom development work is generally non-refundable
                      once work has commenced.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">6. Project Timeline and Delivery</h2>
                    <p>
                      Project timelines are estimates and may be affected by factors beyond our control,
                      including client feedback delays, third-party dependencies, and unforeseen technical challenges.
                      We will keep you informed of any changes to project timelines.
                    </p>
                    <p>
                      Final delivery of projects is subject to client approval and full payment of all fees.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">7. Confidentiality</h2>
                    <p>
                      Both parties agree to maintain the confidentiality of proprietary information shared
                      during the course of our business relationship. This includes business strategies,
                      client data, technical specifications, and other sensitive information.
                    </p>
                    <p>
                      Confidentiality obligations survive the termination of our agreement and remain
                      in effect for a period of 3 years thereafter.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">8. Data Protection and Privacy</h2>
                    <p>
                      We are committed to protecting your personal and business data in accordance with
                      applicable data protection laws. Our collection and use of personal information is
                      governed by our Privacy Policy, which forms part of these Terms.
                    </p>
                    <p>
                      You are responsible for ensuring that any data you provide to us complies with
                      applicable data protection laws and does not infringe on third-party rights.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">9. Warranties and Disclaimers</h2>

                    <h4 className="subsection-title mb-3">9.1 Service Warranty</h4>
                    <p>
                      We warrant that our services will be performed in a professional manner and in
                      accordance with industry standards. However, we do not warrant that our services
                      will be error-free or uninterrupted.
                    </p>

                    <h4 className="subsection-title mb-3 mt-4">9.2 Disclaimers</h4>
                    <ul className="terms-list">
                      <li>Services are provided "as is" without warranty of any kind</li>
                      <li>We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose</li>
                      <li>We do not warrant that our services will meet your specific requirements or expectations</li>
                      <li>We are not liable for any indirect, incidental, or consequential damages</li>
                    </ul>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">10. Limitation of Liability</h2>
                    <p>
                      In no event shall Bluestone IT be liable for any direct, indirect, incidental, special,
                      or consequential damages arising out of or in connection with the use of our services,
                      even if we have been advised of the possibility of such damages.
                    </p>
                    <p>
                      Our total liability under these Terms shall not exceed the amount paid by you for
                      the specific service giving rise to the claim.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">11. Termination</h2>
                    <p>
                      Either party may terminate our agreement with written notice. Upon termination:
                    </p>
                    <ul className="terms-list">
                      <li>All outstanding fees become immediately due</li>
                      <li>We will provide access to completed work</li>
                      <li>Confidentiality obligations remain in effect</li>
                      <li>Ownership rights transfer as specified in our agreement</li>
                    </ul>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">12. Governing Law</h2>
                    <p>
                      These Terms shall be governed by and construed in accordance with the laws of
                      the United States, without regard to its conflict of law provisions. Any disputes
                      arising from these Terms shall be resolved through binding arbitration in accordance
                      with the rules of the American Arbitration Association.
                    </p>
                  </div>

                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-3">13. Changes to Terms</h2>
                    <p>
                      We reserve the right to modify these Terms at any time. Changes will be effective
                      immediately upon posting on our website. Your continued use of our services after
                      such changes constitutes acceptance of the modified Terms.
                    </p>
                  </div>

                  <div className="terms-section">
                    <h2 className="section-title mb-3">14. Contact Information</h2>
                    <p>
                      If you have any questions about these Terms and Conditions, please contact us:
                    </p>
                    <div className="contact-info mt-3">
                      <p><strong>Bluestone IT</strong></p>
                      <p>123 Tech Innovation Drive<br />
                      Digital City, TC 12345<br />
                      United States</p>
                      <p><strong>Email:</strong> legal@bluestoneit.com</p>
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
  );
};

export default TermsContent;