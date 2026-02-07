import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import EmailLink from '../../components/EmailLink';

const ContactInfo: React.FC = () => {
  return (
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
  );
};

export default ContactInfo;