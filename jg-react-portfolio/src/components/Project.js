//This component will display main content of the page
import React, { useState } from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContent() {
  const [currentSection, setSection] = useState('About');

  const displaySection = () => {
    if (currentSection === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentSection === 'About') {
      return <About />;
    }
    if (currentSection === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const changeSection = (content) => setSection(content);

  return (
    <div>
      <Header />
      <Navigation />
      {displaySection()}
      <Footer />
    </div>
  );
}
