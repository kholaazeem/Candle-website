import React, { useState, useEffect, useRef } from 'react';
import './OurValues.css';

const valuesData = [
  {
    id: 'online-only',
    title: 'Online Only',
    heading: 'Online Only',
    description: 'No storefronts. No middlemen. We ship directly to you, cutting costs without cutting corners.'
  },
  {
    id: 'honestly-priced',
    title: 'Honestly Priced',
    heading: 'Honestly Priced',
    description: 'Premium denim shouldn\'t cost a month\'s rent. We price our products fairly based on the true cost of materials and ethical labor.'
  },
  {
    id: 'built-to-last',
    title: 'Built to Last',
    heading: 'Built to Last',
    description: 'We use heavyweight, high-quality selvedge denim designed to fade beautifully and withstand years of daily wear.'
  },
  {
    id: 'timeless-fit',
    title: 'Timeless Fit',
    heading: 'Timeless Fit',
    description: 'Trends fade, but classic silhouettes don\'t. Our jeans are cut to flatter and provide comfort that never goes out of style.'
  }
];

const OurValues = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Yeh observer check karega ke section screen par kab aaya
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Ek dafa animate hone ke baad dobara trigger na ho
        }
      },
      {
        threshold: 0.2, // Jab section 20% screen par nazar aa jaye tab animation chalay
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    // yahan humne ref lagaya hai aur isVisible state ke hisaab se class add ki hai
    <section className={`values-section ${isVisible ? 'section-visible' : ''}`} ref={sectionRef}>
      <div className="container values-container">
        
        {/* Top Headings */}
        <div className="values-header text-center text-md-start">
          <span className="values-subtitle">OUR VALUES</span>
          <h2 className="values-main-title">What we stand for.</h2>
        </div>

        {/* Two Column Layout */}
        <div className="row mt-5">
          
          {/* Left Side: Tabs List */}
          <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
            <div className="tabs-list">
              {valuesData.map((tab, index) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Tab Content */}
          <div className="col-md-8 col-lg-8 offset-lg-1 d-flex align-items-center">
            <div className="tab-content-wrapper" key={activeTab}> 
              <h3 className="content-heading">{valuesData[activeTab].heading}</h3>
              <p className="content-text">{valuesData[activeTab].description}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurValues;