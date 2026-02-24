import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap import
import Navbar from './components/Navbar';
import Home from './pages/Home';
// Import other pages...

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#F9F8F6', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/our-story" element={<OurStory />} /> */}
          {/* <Route path="/shop" element={<Shop />} /> */}
          {/* <Route path="/terms" element={<Terms />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;