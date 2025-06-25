import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // ✅ Replace with your logo image path

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleCloseMenu = () => setMobileOpen(false);
  

  return (
    <nav className="navbar">
      {/* ✅ Only logo */}
      <Link to="/" className="brand" onClick={handleCloseMenu}>
        <img src={logo} alt="Secodra Logo" className="logo-img" />
      </Link>

      <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleCloseMenu}>Home</Link>
        <Link to="/about" onClick={handleCloseMenu}>About</Link>
        <Link to="/services" onClick={handleCloseMenu}>Services</Link>
        <Link to="/portfolio" onClick={handleCloseMenu}>Portfolio</Link>
        <Link to="/contact" onClick={handleCloseMenu}>Contact</Link>
      </div>

      <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;
