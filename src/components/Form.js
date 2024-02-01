import React, { useState } from "react";
import "./form.css"; // Import CSS file for styles

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'YOUR_EMAIL_ADDRESS' with the actual email address where you want to receive messages
    const emailContent = `Email: ${email}\n\nMessage: ${message}`;
    window.location.href = `mailto:gilbertocarnieli@hotmail.com?subject=Message from Portfolio Website&body=${encodeURIComponent(emailContent)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={handleMessageChange} required />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
