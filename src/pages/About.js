// pages/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>
        This AI assistant is built using cutting-edge technologies like Groq LLaMA-3, FastAPI, and React. Our goal is to deliver fast, private, and intelligent conversations.
      </p>
      <div className="team">
        <h3>Our Team</h3>
        <p>👤 Govind Sharma – Developer & Founder</p>
        <p>💡 Powered by Groq | OpenAI | FastAPI</p>
      </div>
    </div>
  );
}

export default About;
