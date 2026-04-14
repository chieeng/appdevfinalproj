import { useState } from "react";

function InquiryForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }
    setFormData({ name: "", email: "", subject: "", message: "" });
    if (onSubmit) onSubmit();
  };

  return (
    <div className="inquiry-form">

      <h3>Send us a Message</h3>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject (Optional)"
        value={formData.subject}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Write your message..."
        value={formData.message}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Send Message</button>

    </div>
  );
}

export default InquiryForm;