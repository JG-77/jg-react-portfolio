import React from 'react';
import resume from '../../assets/Professional-Resume.pdf';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <h3>
        {`Download My `}
        <a href={resume} download="Professional-Resume.pdf" target="_blank">
          Resume
        </a>
      </h3>
    </div>
  );
}
