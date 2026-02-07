import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const StaffingServices: React.FC = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Our IT Staffing Solutions</h2>
          </Col>
        </Row>
        <Row className="g-4 mb-5">
          <Col lg={4} data-aos="fade-up">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <Card.Title className="h5 mb-3">IT Staffing Solutions</Card.Title>
                <Card.Text>
                  We support all IT staffing needs on a contract, contract-to-hire and direct-hire basis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} data-aos="fade-up" data-aos-delay="100">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <Card.Title className="h5 mb-3">IT Talent Management Expertise</Card.Title>
                <Card.Text>
                  We can help you optimize how you attract, develop and retain your IT workforce.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="p-4">
                <Card.Title className="h5 mb-3">IT Services</Card.Title>
                <Card.Text>
                  We achieve business goals through a managed, project-based or outsourced model.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Business Outcomes */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">Business Outcomes</h3>
            <div className="row">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle className="text-success me-3" />Achieve compliance with regulation reform and government mandates</li>
                  <li className="mb-2"><FaCheckCircle className="text-success me-3" />Real-time business intelligence for critical decision making</li>
                  <li className="mb-2"><FaCheckCircle className="text-success me-3" />Superior risk management and mitigation strategies</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2"><FaCheckCircle className="text-success me-3" />Decreased costs and increased agility via integration and consolidation programs</li>
                  <li className="mb-2"><FaCheckCircle className="text-success me-3" />Improved transparency to enable business success</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>

        {/* Industries */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">Complete IT Management Solutions for Every Industry</h3>
            <div className="row text-center">
              <div className="col-md-3 mb-3">Manufacturing</div>
              <div className="col-md-3 mb-3">Law Firm Legal Office</div>
              <div className="col-md-3 mb-3">Government Agencies</div>
              <div className="col-md-3 mb-3">Financial Institution</div>
              <div className="col-md-3 mb-3">Medical Practice</div>
              <div className="col-md-3 mb-3">Non-Profit Organization</div>
              <div className="col-md-3 mb-3">Insurance Agencies</div>
            </div>
          </Col>
        </Row>

        {/* Managed IT Solutions Benefits */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">Benefits of Signing Up for Managed IT Solutions</h3>
            <ul className="list-unstyled row">
              <li className="col-md-6 mb-3"><FaCheckCircle className="text-primary me-3" />Save you money—by helping minimize expensive network disasters</li>
              <li className="col-md-6 mb-3"><FaCheckCircle className="text-primary me-3" />Proactive Services—detect problems early and prevent them escalating</li>
              <li className="col-md-6 mb-3"><FaCheckCircle className="text-primary me-3" />Access to Professional IT Staff—your own in-house IT staff</li>
            </ul>
          </Col>
        </Row>

        {/* Applicant Outsourcing */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">Applicant Outsourcing</h3>
            <p className="text-muted">
              There's a certain enthusiasm and a level of dedication that goes with working at our company. And, with new regional offices and a growing need for our staffing and professional recruitment services, we're looking for people who want to help us continue to grow.
            </p>
            <p className="text-muted">
              Our outsourcing services have been designed to provide our customers with a better service than their own internal resources can deliver. Our experience is vast, our expertise is world-class and our skills are proven. Our team of experts is totally focused on delivering both operational enhancement and business security.
            </p>
          </Col>
        </Row>

        {/* Application Maintenance and Support */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">Application Maintenance and Support Services</h3>
            <p className="text-muted">
              Continuous change in business needs effective and efficient application support and maintenance. Therefore, managing and maintaining application can be quite a challenging task.
            </p>
            <p className="text-muted">
              At our company, we maintain your current IT functionality and operations to ensure the much needed edge to your business. Application maintenance and support services provide IT solutions that support organizational needs, enabling them to minimize costs, improve efficiency and create a competitive advantage. We offer flexible support models such as onsite, offsite, offshore, or a combination of any of the two to our customers.
            </p>
            <p className="text-muted">
              Throughout the entire application life-cycle we provide a range of services including Application Assessment and Audit, Application Support, Application Maintenance, Application Enhancement, Release and Deployment Management, Preventive and Proactive Maintenance, and Service Management.
            </p>
            <p className="text-muted">
              We make sure that stringent adherence to SLA is maintained. Our application management and maintenance methods make certain your systems evolve with your business, enabling you to maintain your obligations with your clients.
            </p>
          </Col>
        </Row>

        {/* Infrastructure Outsourcing */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">Infrastructure Outsourcing</h3>
            <p className="text-muted">
              We partner with some of the esteemed hosting agencies for hosting of your application infrastructure and take complete ownership of support and maintenance. We work with you to optimize the way you use your core IT infrastructures. We implement robust integrated operations that are built to IT Infrastructure Library standards, incorporate proven technology solutions and are backed by specialist technical expertise.
            </p>
            <p className="text-muted">
              We provide following service options: Remote Hardware Monitoring, Operating System Maintenance Support, Redundancy and Disaster Recovery Implementation, Database Administration and Management Support.
            </p>
          </Col>
        </Row>

        {/* Contingent Search */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">Contingent Search</h3>
            <p className="text-muted">
              It takes much more than just interviewing and checking references. A retained or contingent search is a strategic, dynamic process. We truly understand the needs and interests of all parties and work diligently to ensure the best outcome.
            </p>
            <p className="text-muted">
              We provide customized recruiting services on a contingent or retained search basis, depending on what will be most helpful to the client and the process. We've worked with companies ranging from Fortune 100 to new start-up organizations.
            </p>
            <p className="text-muted">
              In all economic conditions, companies need to choose from industry-leading candidates. As a "career agent" we understand the need to identify and match qualified individuals to each position, and the critical importance of due diligence. Our unique recruitment process taps into a variety of hiring pools, including the working candidate.
            </p>
          </Col>
        </Row>

        {/* Government Services */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">Government Services</h3>
            <p className="text-muted">
              Integrate & manage your IT investment suitability, budget & priority of the assignment. Enabling Government to Meet The Challenges Ahead.
            </p>
            <p className="text-muted">
              Government at all levels has experienced an unrelenting demand to improve the delivery and infrastructure of their information technology landscapes. The primary drivers for this include: Enhance Transparency, Improve Connectivity, Deliver Services in a Timelier and More Cost Effective Manner.
            </p>
            <p className="text-muted">
              Government also has a pressing need to reduce the cost of providing services as the economy continues to impose drastic reductions in available revenue streams, while demand for services continues unabated. To address this need, government is looking at a variety of options which include greater reliance on professional services contingent labor, consolidation of facilities, cost sharing, improvement in the delivery of services, upgrading outdated technologies, and implementing solutions that are simpler and more cost effective to maintain.
            </p>
            <p className="text-muted">
              We have been a trusted partner to government: US Federal Government, US State and Local Government, International agencies.
            </p>
          </Col>
        </Row>

        {/* Vendor on Site */}
        <Row className="mb-5">
          <Col lg={12} data-aos="fade-up">
            <h3 className="h2 fw-bold mb-4 text-center">Vendor on Site</h3>
            <p className="text-muted">
              For large staffing needs, we provide a vendor on site solution to handle hiring, training, employee questions and any other HR needs. Our on-site staff is trained to address daily staffing issues as well as project management.
            </p>
            <p className="text-muted">
              Our vendor program is one of the ways we partner with our clients to ensure appropriate, efficient staffing and best practices in hiring and employee management. Our on-site manager can provide staff for all your office and production needs, including Accounting and Finance, Administrative, Customer Service, Human Resources, Information Technology, Inventory Control, Marketing, Purchasing, Research & Analysis, Sales, Transportation.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StaffingServices;