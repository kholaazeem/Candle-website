import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <nav className="custom-navbar">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/">Candle</NavLink>
        </div>

        {/* Links */}
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/our-story" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Our Story
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Shop
          </NavLink>
          <NavLink to="/terms" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Terms
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;