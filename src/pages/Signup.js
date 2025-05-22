import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true"); // ✅ Save login state
    navigate("/chat"); // ✅ Redirect to Chat
  };

  return (
    <div className="page-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
