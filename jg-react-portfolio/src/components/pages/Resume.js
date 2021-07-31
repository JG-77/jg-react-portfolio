import React from 'react';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <h3>
        {`Download My `}
        {/* file not working */}
        <a
          href="./assets/Professional-Resume.pdf"
          download="Professional-Resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </h3>
    </div>
  );
}
