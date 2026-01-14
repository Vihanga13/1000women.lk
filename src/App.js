import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import MissionPillars from './pages/MissionPillars';
import WhyApproach from './pages/WhyApproach';
import JoinContact from './pages/JoinContact';
import Blog from './pages/Blog';
import Recognition from './pages/Recognition';
import InclusiveGrowth from './pages/InclusiveGrowth';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-24 lg:pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mission-pillars" element={<MissionPillars />} />
            <Route path="/why-approach" element={<WhyApproach />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/inclusive-growth" element={<InclusiveGrowth />} />
            <Route path="/recognition" element={<Recognition />} />
            <Route path="/join-contact" element={<JoinContact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
