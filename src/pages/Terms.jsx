import React, { useState, useEffect } from 'react';
import './Terms.css';

// Terms Page Content Data
const termsData = [
  {
    id: 'general',
    title: 'General Terms',
    content: 'These Terms of Service govern your use of the Candle website and all products sold through our online store. By accessing or purchasing from candle-jeans.com, you agree to be bound by these terms. We reserve the right to update these terms at any time, and continued use of our services constitutes acceptance of any changes.'
  },
  {
    id: 'orders',
    title: 'Orders & Payments',
    content: 'All prices are listed in USD and include applicable taxes. Payment is processed securely through our payment partners at checkout. We accept major credit cards and digital wallets. Orders are confirmed via email and typically ship within 2-4 business days.'
  },
  {
    id: 'sample',
    title: 'Free Sample Program',
    content: 'Our free sample program allows you to request a swatch of denim fabric before purchasing. Samples are limited to one per household per quarter. While the sample itself is free, shipping costs may apply depending on your location. Samples are non-transferable.'
  },
  {
    id: 'returns',
    title: 'Returns & Exchanges',
    content: 'We offer a 30-day return window on all unworn, unwashed items in their original condition with tags attached. Returns are free for customers within the United States. International returns are the responsibility of the customer. Exchanges are subject to availability.'
  },
  {
    id: 'shipping',
    title: 'Shipping Policy',
    content: 'We ship to most countries worldwide. Standard shipping within the US is free on orders over $100. International shipping rates are calculated at checkout. Delivery times vary by location — typically 3-7 business days domestically and 7-21 days internationally.'
  },
  {
    id: 'privacy',
    title: 'Privacy & Data',
    content: 'We collect only the data necessary to fulfill your orders and improve your experience. We never sell your personal information to third parties. You can request deletion of your data at any time by contacting us at hello@candle-jeans.com.'
  },
  {
    id: 'contact',
    title: 'Contact Us',
    content: 'For any questions regarding these terms or our services, reach out to us at hello@candle-jeans.com. We aim to respond within 24 hours on business days.'
  }
];

const Terms = () => {
  const [activeSection, setActiveSection] = useState(termsData[0].id);

  // Smooth scroll page to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll Spy Logic: Detects which section is currently on screen
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar
      
      let currentSection = termsData[0].id;
      for (const section of termsData) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to specific section on click
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Space for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="terms-page-wrapper">
      <div className="container">
        
        {/* Header Section */}
        <div className="terms-header">
          <span className="legal-subtitle">LEGAL</span>
          <h1 className="terms-title">Terms of Service.</h1>
        </div>

        <div className="row terms-content-row">
          
          {/* Left Side: Sticky Sidebar */}
          <div className="col-lg-3 col-md-4 mb-5 mb-md-0">
            <div className="sticky-sidebar">
              <ul className="sidebar-list">
                {termsData.map((item) => (
                  <li key={item.id}>
                    <button
                      className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Scrollable Content */}
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="terms-sections">
              {termsData.map((item) => (
                <div key={item.id} id={item.id} className="term-block">
                  <h3 className="term-heading">{item.title}</h3>
                  <p className="term-desc">{item.content}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Terms;