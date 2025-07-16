import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Process from './components/Process';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Tools from './components/Tools';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OAuthCallback from './components/OAuthCallback';

// 🏠 Moved landing sections into Home component
function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ProblemSolution />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <Portfolio />
      <Team />
      <Tools />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

// ✅ Main App with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oauth/callback" element={<OAuthCallback />} />
      </Routes>
    </Router>
  );
}

export default App;
