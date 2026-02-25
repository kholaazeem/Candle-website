import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Background Watermark */}
      <div className="footer-watermark">CANDLE</div>

      <div className="container footer-content">
        <div className="row">
          
          {/* Column 1: Navigate */}
          <div className="col-12 col-md-4 col-lg-3 footer-col">
            <h4 className="footer-heading">Navigate</h4>
            <div className="footer-links-container">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/our-story" className="footer-link">Our Story</Link>
              <Link to="/shop" className="footer-link">Shop</Link>
              <Link to="/terms" className="footer-link">Terms</Link>
            </div>
          </div>

          {/* Column 2: Connect */}
          <div className="col-12 col-md-4 col-lg-3 offset-lg-1 footer-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-links-container">
              <a href="mailto:hello@candle-jeans.com" className="footer-link">hello@candle-jeans.com</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="footer-link">Pinterest</a>
            </div>
          </div>

          {/* Column 3: Promise */}
          <div className="col-12 col-md-4 col-lg-4 offset-lg-1 footer-col">
            <h4 className="footer-heading">Promise</h4>
            <p className="footer-text">
              Online-only. No middlemen. Just honest, beautifully crafted denim delivered to your door.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="footer-bottom">
          <p>© 2026 Candle. All rights reserved.</p>
          <p>Crafted with care, worn with pride.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;