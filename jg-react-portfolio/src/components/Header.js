//element set up
import React from 'react';

const styles = {
  headerStyle: {
    backgroungImage: `url(../images/blue-skyline.jpeg)`,
  },
};

function Header() {
  return (
    <header className="header" style={styles.headerStyle}>
      <h1>Jessie Guadarrama</h1>
    </header>
  );
}

export default Header;
