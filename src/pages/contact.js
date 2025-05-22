// pages/Contact.js
import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message sent: " + message);
    setMessage("");
  };

  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
