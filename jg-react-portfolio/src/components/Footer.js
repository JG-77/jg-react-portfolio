//page footer
import React from 'react';

const styles = {
  footing: {
    height: '100px',
    width: '100%',
    backgroundColor: 'black',
    lineHeight: '60px',
  },
  footerHeading: {
    textAlign: 'center',
    color: 'white',
  },
  ul: {
    listStyleType: 'none',
    display: 'inline-flex',
    flexWrap: 'flex',
  },
  anchor: {
    marginRight: '40px',
    color: 'rgb(0, 255, 213)',
    textDecoration: 'none',
  },
};

export default function Footer() {
  return (
    <div>
      <footer style={styles.footing}>
        <h2 style={styles.footerHeading}>
          <ul style={styles.ul}>
            <li>
              <a
                style={styles.anchor}
                href="https://www.linkedin.com/in/jessieguadarrama7/"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                style={styles.anchor}
                href="https://www.instagram.com/ese_cocho_jes/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a style={styles.anchor} href="https://github.com/JG-77">
                Github
              </a>
            </li>
          </ul>
        </h2>
      </footer>
    </div>
  );
}
