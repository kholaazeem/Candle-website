import React from 'react';
import Hero from '../components/Hero';
import OurValues from '../components/OurValues';
import OurStoryPreview from '../components/OurStoryPreview';


const Home = () => {
  return (
    <div className="home-page-wrapper">
      <Hero />
      <OurValues />
      <OurStoryPreview/>
     
    </div>
  );
};

export default Home;