//Navbar element set up
import React from 'react';

function Navigation() {
  return (
    <ul>
      <li>
        <a href="#About" onClick={() => changeSection('About')}>
          About Me
        </a>
      </li>
      <li>
        <a href="#Portfolio" onClick={() => changeSection('Portfolio')}>
          Portfolio
        </a>
      </li>
      <li>
        <a href="#Resume" onClick={() => changeSection('Resume')}>
          Resume
        </a>
      </li>
      <li>
        <a href="#Contact" onClick={() => changeSection('Contact')}>
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
