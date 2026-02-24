import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="container hero-container">
        <div className="row align-items-center">
          
          {/* Left Side: Content */}
          <div className="col-lg-5 hero-content-wrapper">
            <div className="hero-content">
              <span className="est-text">EST. 2024</span>
              
              <h1 className="hero-title">
                Denim <br />
                <span className="hero-italic">worth</span> <br />
                keeping.
              </h1>
              
              <p className="hero-description">
                Affordable, high-quality jeans crafted for adults who value substance over hype. Try before you buy.
              </p>
              
              <button className="cta-btn">
                ORDER A FREE SAMPLE <span className="arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-lg-7 hero-image-wrapper">
            <div className="image-container">
              <img 
                src="/assets/hero-jeans.jpg" 
                alt="Folded Denim Jeans" 
                className="hero-image"
              />
              {/* Floating Price Label */}
              <div className="floating-label">
                INDIGO SELVEDGE — $68
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;