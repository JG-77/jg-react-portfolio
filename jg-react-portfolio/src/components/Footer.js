//page footer
import React from 'react';

const styles = {
  footing: {
    height: '50px',
    width: '100%',
    backgroundColor: 'black',
    lineHeight: '60px',
  },
  footerHeading: {
    textAlign: 'center',
    color: 'white',
  },
};

export default function Footer() {
  return (
    <div>
      <footer style={styles.footing}>
        <h2 style={styles.footerHeading}>Footer</h2>
      </footer>
    </div>
  );
}
