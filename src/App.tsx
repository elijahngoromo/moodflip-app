import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Academics />
      <Contact />
    </div>
  );
}

export default App;