//element set up
import React from 'react';
import '../styles/Header.css';
import blueSkyline from '../images/blue-skyline.jpeg';

const styles = {
  headerStyle: {
    backgroundImage: `url(${blueSkyline})`,
    //backgroundSize: 'cover',
    //width: '100%',
    //height: '150px',
    backgroundPosition: 'right',
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
