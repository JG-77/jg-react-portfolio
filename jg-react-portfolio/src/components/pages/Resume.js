import React from 'react';
import resume from '../../assets/Professional-Resume-jg.pdf';
import '../../styles/Resume.css';

//Resume section
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
    marginLeft: '30px',
    fontSize: '18px',
  },
  front: {
    marginLeft: '30px',
    fontSize: '18px',
    float: 'left',
  },
  back: {
    marginRight: '30px',
    fontSize: '18px',
    float: 'right',
  },
  anchor: {
    color: 'white',
  },
  ul: {
    fontSize: '15px',
    listStyleType: 'disclosure-closed',
  },
  li: {
    marginBottom: '10px',
  },
};
export default function Resume() {
  return (
    <div style={styles.divSect} className="resumeDiv">
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
      </h3>
      <h3 style={styles.front}>
        Front-end Proficencies
        <ul style={styles.ul}>
          <li style={styles.li}>HTML</li>
          <li style={styles.li}>CSS</li>
          <li style={styles.li}>Bootstrap</li>
          <li style={styles.li}>Javascript</li>
          <li style={styles.li}>JQuery</li>
          <li style={styles.li}>React.js</li>
          <li style={styles.li}>Responsive Design</li>
        </ul>
      </h3>
      <h3 style={styles.back} className="h3back">
        Back-end Proficencies
        <ul style={styles.ul}>
          <li style={styles.li}>Node.js</li>
          <li style={styles.li}>Express.js</li>
          <li style={styles.li}>MySQL, Sequelize</li>
          <li style={styles.li}>MongoDB, Mongoose</li>
          <li style={styles.li}>API's</li>
          <li style={styles.li}>REST</li>
          <li style={styles.li}>Web Performance Optimization</li>
          <li style={styles.li}>GraphQL</li>
        </ul>
      </h3>
    </div>
  );
}
