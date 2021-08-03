import React from 'react';
import resume from '../../assets/Professional-Resume.pdf';

const styles = {
  divSect: {
    background: 'rgba(0, 0, 0, 0.7)',
    border: 'solid',
    margin: '0px 20px 0px',
    fontFamily: 'arial',
    height: '450px',
    color: 'white',
  },
  h2: {
    textAlign: 'center',
    fontSize: '30px',
  },
  h3: {
    marginLeft: '10px',
    fontSize: '18px',
  },
  anchor: {
    color: 'white',
  },
};
export default function Resume() {
  return (
    <div style={styles.divSect}>
      <h2 style={styles.h2}>Resume</h2>
      <h3 style={styles.h3}>
        {`Download My `}
        <a
          href={resume}
          download="Professional-Resume.pdf"
          target="_blank"
          style={styles.anchor}
        >
          Resume
        </a>
        {/* need to add proficiencies */}
      </h3>
    </div>
  );
}
