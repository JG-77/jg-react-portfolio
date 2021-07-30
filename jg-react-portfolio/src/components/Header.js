//element set up
import React from 'react';
import '../styles/Header.css';
const styles = {
  headerStyle: {
    backgroungImage: 'url(./images/blue-skyline.jpeg)',
  },
  headingOne: {
    fontFamily: 'Helvitica',
  },
};

function Header() {
  return (
    <header className="header" style={styles.headerStyle}>
      <h1 className="heading" style={styles.headingOne}>
        Jessie Guadarrama
      </h1>
    </header>
  );
}

export default Header;
