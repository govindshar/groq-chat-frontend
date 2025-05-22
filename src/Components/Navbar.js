import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate("/")}>
        🧠 AI Chat
      </div>
      <div className="navbar-links">
        {/* Home removed */}
        <Link to="/chat">Chat</Link>
        <Link to="/about">About</Link>
        <Link to="/offerings">Offerings</Link>
        <Link to="/contact">Contact</Link>

        {!isLoggedIn ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        ) : (
          <span onClick={handleLogout} className="logout-link">Logout</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
