import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="custom-navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>Candle</NavLink>
        </div>

        {/* Hamburger Icon (Only visible on mobile) */}
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/our-story" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Our Story
          </NavLink>
          <NavLink 
            to="/shop" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Shop
          </NavLink>
          <NavLink 
            to="/terms" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            onClick={closeMenu}
          >
            Terms
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;