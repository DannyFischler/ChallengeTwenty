import React, { useState } from 'react';
import Header from './Header/Header';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';
// import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === 'about' && <About />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
