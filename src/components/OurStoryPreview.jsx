import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './OurStoryPreview.css';

const OurStoryPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Jab 20% section nazar aaye tab animate ho
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      className={`story-preview-section ${isVisible ? 'section-visible' : ''}`} 
      ref={sectionRef}
    >
      <div className="container story-container">
        <div className="row align-items-center">
          
          {/* Left Side: Lifestyle Image */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="story-image-wrapper">
              <img 
                src="/assets/jeans-lifestyle-1.jpg" 
                alt="Woman wearing classic denim jeans" 
                className="story-image"
              />
            </div>
          </div>

          {/* Right Side: Quote & Link */}
          <div className="col-lg-6">
            <div className="story-text-content">
              <h2 className="story-quote">
                "We make jeans the way they used to be made — with patience, quality cotton, and no shortcuts."
              </h2>
              
              <Link to="/our-story" className="story-link">
                READ OUR STORY <span className="arrow">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStoryPreview;