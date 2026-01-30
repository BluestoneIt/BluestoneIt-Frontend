import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';

interface EmailLinkProps {
  email: string;
  subject?: string;
  body?: string;
  signature?: string;
  displayText?: string;
  className?: string;
}

const EmailLink: React.FC<EmailLinkProps> = ({
  email,
  subject = 'Inquiry from Bluestone IT Website',
  body = `Dear Bluestone IT Team,

I am interested in your services and would like to discuss my project requirements.

Please let me know the next steps.

Thanks & Regards,
[Your Name]
[Your Contact Information]`,
  signature,
  displayText,
  className = ''
}) => {
  const [showModal, setShowModal] = useState(false);

  const fullBody = signature ? `${body}\n\n${signature}` : body;

  const handleGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
    window.open(gmailUrl, '_blank');
    setShowModal(false);
  };

  const handleOutlook = () => {
    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullBody)}`;
    window.open(outlookUrl, '_blank');
    setShowModal(false);
  };

  return (
    <>
      <a
        href="#"
        className={className}
        style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        {displayText || email}
      </a>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Choose Email Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select your preferred email client to compose the message:</p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="primary" onClick={handleGmail}>
              <FaGoogle className="me-2" /> Gmail
            </Button>
            <Button variant="primary" onClick={handleOutlook}>
              <FaMicrosoft className="me-2" /> Outlook
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EmailLink;