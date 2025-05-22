import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Contact from "./pages/contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Offerings from "./pages/Offerings";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute"; // ✅ Import this
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/offerings" element={<Offerings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
