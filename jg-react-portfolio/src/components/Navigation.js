//Navbar element set up
import React from 'react';
import '../styles/Navigation.css';

function Navigation({ currentSection, changeSection }) {
  return (
    <nav className="nav">
      <ul className="ul">
        <li>
          <a
            className={currentSection === 'About' ? 'anchorActive' : 'anchor'}
            href="#About"
            onClick={() => changeSection('About')}
          >
            {/* className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} */}
            About Me
          </a>
        </li>
        <li>
          <a
            className={
              currentSection === 'Portfolio' ? 'anchorActive' : 'anchor'
            }
            href="#Portfolio"
            onClick={() => changeSection('Portfolio')}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className={currentSection === 'Resume' ? 'anchorActive' : 'anchor'}
            href="#Resume"
            onClick={() => changeSection('Resume')}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            className={currentSection === 'Contact' ? 'anchorActive' : 'anchor'}
            href="#Contact"
            onClick={() => changeSection('Contact')}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
