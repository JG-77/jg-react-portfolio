//element set up
import React from 'react';
import '../styles/Header.css';
import blueSkyline from '../images/blue-skyline.jpeg';

const styles = {
  headerStyle: {
    //   image not loading
    backgroundImage: `url(${blueSkyline})`,
  },
};

function Header() {
  return (
    <header className="header" style={styles.headerStyle}>
      <h1 className="heading">Jessie Guadarrama</h1>
    </header>
  );
}

export default Header;
