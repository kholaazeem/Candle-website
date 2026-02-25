import React, { useEffect } from 'react';
import './OurStory.css';

const OurStory = () => {
  // Yeh ensure karega ke page hamesha top se open ho
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="our-story-page">
      
      {/* SECTION 1: Intro & Hero Image */}
      <section className="story-intro-section container">
        <div className="intro-text-content">
          <span className="story-subtitle">OUR STORY</span>
          <h1 className="story-main-title">
            Born from a simple <br /> frustration.
          </h1>
          <p className="story-intro-desc">
            In 2024, we set out with one question: why does a good pair of jeans cost so much? The answer wasn't the denim, the stitching, or the fit. It was the storefronts, the middlemen, the billboards. We cut all of that.
          </p>
        </div>
        
        <div className="intro-image-wrapper">
          <img 
            src="/assets/hero-jeans.jpg" 
            alt="Folded Denim Jeans" 
            className="full-width-image"
          />
        </div>
      </section>

      {/* SECTION 2: Massive Quote & Mission Text */}
      <section className="story-mission-section container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h2 className="massive-quote">
              "Good denim is patient. It moulds to the wearer, softening where it needs to, holding where it must."
            </h2>
            
            <div className="mission-paragraphs">
              <p>
                Candle is an online-only label. Every pair is made from long-staple selvedge cotton sourced from trusted mills. We obsess over the weight of the fabric, the tension of every stitch, the curve of every pocket. Then we sell it directly to you — no markup, no games.
              </p>
              <p>
                Our name? A candle burns steadily. It's warm, familiar, unpretentious. That's how we think about clothes — they should serve you quietly, beautifully, for a long time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Our Promise */}
      <section className="story-promise-section container">
        <div className="row align-items-center">
          
          {/* Left Side: Image */}
          <div className="col-md-6 mb-5 mb-md-0">
            <div className="promise-image-wrapper">
              <img 
                src="/assets/jeans-lifestyle-2.jpg" 
                alt="Person walking in jeans on street" 
                className="promise-image"
              />
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="col-md-5 offset-md-1">
            <div className="promise-text-content">
              <h3 className="promise-heading">Our Promise</h3>
              <p className="promise-desc">
                Every pair comes with a free sample offer. We want you to touch the denim before you commit. Because once you feel it, you'll understand.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default OurStory;