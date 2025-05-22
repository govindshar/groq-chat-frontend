// src/pages/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <main className="home-main">
        <h1 className="home-title">Your Private AI Assistant</h1>
        <p className="home-subtitle">
          Chat with an advanced AI powered by Groq LLaMA-3.<br />
          Get instant, intelligent answers — anytime, anywhere.
        </p>

        <button className="home-button" onClick={() => navigate("/chat")}>
          Start Chatting
        </button>

        <section className="home-features">
          <div className="feature-card">🧠 Real-time LLM responses</div>
          <div className="feature-card">🔒 Private chat history</div>
          <div className="feature-card">⚡ Powered by Groq</div>
          <div className="feature-card">📱 Mobile-friendly UI</div>
        </section>
      </main>
    </div>
  );
}

export default Home;
