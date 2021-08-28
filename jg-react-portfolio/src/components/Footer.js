//page footer
import React from 'react';
import '../styles/Footer.css';
import stackoverFlow from '../icons/stackIcon.png';
import gitIcon from '../icons/git-icon.png';
import linkedIn from '../icons/linkedIn.png';

const styles = {
  footing: {
    //height: '100px',
    width: '100%',
    backgroundColor: 'black',
    //lineHeight: '60px',
    paddingBottom: '45px',
  },
  footerHeading: {
    textAlign: 'center',
    color: 'white',
  },
  ul: {
    listStyleType: 'none',
    //display: 'inline-flex',
    flexWrap: 'flex',
  },
  anchor: {
    marginRight: '75px',
    color: 'rgb(0, 255, 213)',
    textDecoration: 'none',
  },
  icon: {
    height: '100px',
    width: '100px',
    marginTop: '5px',
  },
};

export default function Footer() {
  return (
    <div>
      <footer style={styles.footing} className="footer">
        <h2 style={styles.footerHeading}>
          <ul style={styles.ul} className="ul">
            <li>
              <a
                style={styles.anchor}
                href="https://www.linkedin.com/in/jessieguadarrama7/"
              >
                <img src={linkedIn} style={styles.icon} alt="LinkedIn icon" />
              </a>
            </li>
            <li>
              <a
                style={styles.anchor}
                href="https://www.instagram.com/ese_cocho_jes/"
              >
                <img
                  src={stackoverFlow}
                  style={styles.icon}
                  alt="Stack Overflow icon"
                />
              </a>
            </li>
            <li>
              <a style={styles.anchor} href="https://github.com/JG-77">
                <img src={gitIcon} style={styles.icon} alt="GitHub icon" />
              </a>
            </li>
          </ul>
        </h2>
      </footer>
    </div>
  );
}
