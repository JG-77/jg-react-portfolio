import React from 'react';

const styles = {
  aboutMeHead: {
    textAlign: 'center',
  },
  divSect: {
    border: 'solid',
    margin: '0px 20px 0px',
    fontFamily: 'arial',
  },
  paragraph: {
    margin: '0px 20px 15px',
  },
};

export default function About() {
  return (
    <div style={styles.divSect}>
      <h2 className="aboutMeHead" style={styles.aboutMeHead}>
        About Me
      </h2>
      <p className="bio" style={styles.paragraph}>
        A dedicated and persistent web developer, I earned my education and
        experience from UC San Diego Extension Coding Bootcamp with a
        Certificate in Full-Stack Web Development. With new knowledge in
        Javascript, MongoDB, Node.js, and many other coding languages, I strive
        towards creating innovative and efficient projects. Born and raised in
        San Diego County, I am never far from the beautiful Southern California
        beaches and sunsets! I graduated from San Diego State University in May
        2020 with a bachelor's in Criminal Justice and Sociology, yet during
        recent global pandemic, I have decided to change my career path towards
        web development. I am progressively developing my coding skills and
        eagerly seeking projects to gain further knowledge and experience.
      </p>
    </div>
  );
}
