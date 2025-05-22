import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Chat.css";

function Chat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [history, setHistory] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("chatHistory");
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("chatHistory", JSON.stringify(history));
  }, [history]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const timestamp = new Date().toLocaleString();

    try {
      const res = await axios.post("http://localhost:5000/chat", {
        prompt: input,
      });

      const reply = res.data.reply || "No reply received.";
      const newEntry = { question: input, answer: reply, timestamp };

      const updatedHistory = [...history, newEntry];
      setHistory(updatedHistory);
      setSelectedIndex(updatedHistory.length - 1);
      setResponse(reply);
      setInput("");

      await axios.post("http://localhost:5000/save-chat", {
        prompt: input,
        response: reply,
        timestamp,
      });
    } catch (error) {
      console.error("❌ Error occurred:", error);
      setResponse("❌ Something went wrong. Check backend.");
    }
  };

  const deleteHistoryItem = (index) => {
    const updated = history.filter((_, i) => i !== index);
    setHistory(updated);
    setSelectedIndex(null);
    setResponse("");
  };

  return (
    <div className={`chat-container ${isMobile ? "mobile" : ""}`}>
      {/* Sidebar */}
      <div className="chat-sidebar">
        <button
          onClick={() => {
            setInput("");
            setResponse("");
            setSelectedIndex(null);
          }}
        >
          🆕 New Chat
        </button>

        {!isMobile && (
          <div>
            <strong>🕘 History:</strong>
            <ul>
              {history.map((item, index) => (
                <li key={index} className={selectedIndex === index ? "active" : ""}>
                  <div
                    onClick={() => {
                      setSelectedIndex(index);
                      setResponse(item.answer);
                      setInput("");
                    }}
                  >
                    {item.question.split(" ").slice(0, 3).join(" ")}...
                  </div>
                  <button onClick={() => deleteHistoryItem(index)}>✖</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Main Chat Area */}
      <div className="chat-main">
        <div className="chat-box">
          {selectedIndex !== null && (
            <>
              <strong>Question:</strong>
              <div className="chat-question">{history[selectedIndex].question}</div>
            </>
          )}
          <strong>Answer:</strong>
          <div>{response}</div>
          {selectedIndex !== null && (
            <div className="chat-timestamp">
              <strong>🕓</strong> {history[selectedIndex]?.timestamp}
            </div>
          )}
        </div>

        <div className="chat-input-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your question..."
          />
          <button onClick={sendMessage}>Chat</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
