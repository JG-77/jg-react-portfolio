import React from 'react';
import myPic from '../../images/myPic.JPEG';

//About Me section styling
const styles = {
  aboutMeHead: {
    textAlign: 'center',
    fontSize: '30px',
  },
  divSect: {
    background: 'rgba(0, 0, 0, 0.7)',
    border: 'solid',
    margin: '0px 20px 0px',
    fontFamily: 'arial',
    minHeight: '450px',
    color: 'white',
  },
  paragraph: {
    margin: '0px 10px 0px 0px',
    textAlign: 'justify',
    fontSize: '15px',
    textIndent: '2em',
    lineHeight: '21px',
  },
  imagediv: {
    float: 'left',
    height: '300px',
    width: '300px',
    marginLeft: '10px',
    border: 'solid',
    marginRight: '10px',
  },
  image: {
    maxHeight: '350px',
    minWidth: '300px',
    height: '300px',
    width: '300px',
    objectFit: 'cover',
  },
};

export default function About() {
  return (
    <div style={styles.divSect}>
      <h2 style={styles.aboutMeHead}>About Me</h2>
      <div style={styles.imagediv}>
        <img src={myPic} alt="Jessie Guadarrama" style={styles.image} />
      </div>
      <p style={styles.paragraph}>
        A dedicated and persistent web developer, I earned my education and
        experience from UC San Diego Extension Coding Bootcamp with a
        Certificate in Full-Stack Web Development. With new knowledge in
        Javascript, MongoDB, Node.js, and many other coding languages, I strive
        towards creating innovative and efficient projects. I graduated from San
        Diego State University in May 2020 with a bachelor's in Criminal Justice
        and Sociology, yet during recent global pandemic, I have decided to
        change my career path towards web development. I am progressively
        developing my coding skills and eagerly seeking projects to gain further
        knowledge and experience.
      </p>
      <p style={styles.paragraph}>
        Born and raised in San Diego County, I am never far from the beautiful
        Southern California beaches and sunsets. My Mexican background is
        something I am proud of and like to stay in touch with. Soccer fanatic,
        vinyl collector, and car enthusiast in my spare time. I hope to one day
        travel the world and learn new languages. As I begin my career path, I
        aspire to create significant projects as well as demonstrate my
        creativity!
      </p>
    </div>
  );
}
