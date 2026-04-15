import { useState } from "react";
import InquiryForm from "../components/InquiryForm";
import cover3 from "../images/cover-3.png";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header" style={{ backgroundImage: `url(${cover3})` }}>
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      {submitted && (
        <div className="success-message">
          ✓ Thank you! We've received your message and will get back to you soon.
        </div>
      )}

      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-item">
            <h3>📍 Address</h3>
            <p>123 Main Street, Baguio City, Philippines</p>
          </div>
          <div className="info-item">
            <h3>📞 Phone</h3>
            <p>+63 912 345 6789</p>
          </div>
          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>support@vacansee.com</p>
          </div>
          <div className="info-item">
            <h3>🕒 Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <div className="contact-form">
          <InquiryForm onSubmit={handleFormSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Contact;