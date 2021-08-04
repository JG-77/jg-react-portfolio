import React from 'react';
import fitnessNuts from '../../images/Fitness-Nuts.png';
import noteTaker from '../../images/Note-Taker-App.png';
import teamProfile from '../../images/Team Profile Gen.png';
import budgetTracker from '../../images/budget-tracker-app.png';
import fitnessTracker from '../../images/Fitness-tracker.png';
import movieBuffs from '../../images/Movie-Buffs.png';

const styles = {
  divSect: {
    background: 'rgba(0, 0, 0, 0.7)',
    border: 'solid',
    margin: '0px 20px 0px',
    fontFamily: 'arial',
    color: 'white',
    flexWrap: 'wrap',
    display: 'inline-block',
  },
  h2: {
    textAlign: 'center',
    fontSize: '30px',
  },
  // cardLeft: {
  //   border: 'solid',
  //   margin: '0px 20px 10px 10px',
  //   color: 'white',
  //   width: '45%',
  //   textAlign: 'center',
  //   display: 'inline-block',
  //   backgroundColor: '#062018',
  // },
  // cardRight: {
  //   border: 'solid',
  //   margin: '0px 20px 10px 10px',
  //   color: 'white',
  //   width: '45%',
  //   textAlign: 'center',
  //   display: 'inline-block',
  //   float: 'right',
  //   backgroundColor: '#062018',
  // },
  card: {
    border: 'solid',
    margin: '0px 20px 10px 10px',
    color: 'white',
    width: '45%',
    //textAlign: 'center',
    display: 'inline-block',
    //float: 'right',
    //backgroundColor: '#062018',
  },
  cardRight: {
    border: 'solid',
    margin: '0px 20px 10px 10px',
    color: 'white',
    width: '45%',
    //textAlign: 'center',
    display: 'inline-block',
    float: 'right',
    //backgroundColor: '#062018',
  },
  cardimg: {
    maxHeight: '250px',
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    width: 'fit-content',
  },
  pTag: {
    textAlign: 'justify',
    margin: '0px 10px 0px',
  },
  anchor: {
    color: 'white',
  },
  gitLink: {
    color: 'rgb(0, 255, 213)',
    textDecoration: 'none',
  },
};

export default function Portfolio() {
  return (
    <div style={styles.divSect}>
      <h2 style={styles.h2}>Portfolio</h2>
      {/* first card styling and html set up */}
      {/* <div
        style={styles.cardLeft}
        style={{ backgroundImage: `url(${fitnessNuts})` }}
      >
        <a href="https://fitness-nuts.herokuapp.com/">
          <img
            style={styles.cardimg}
            src={fitnessNuts}
            alt="Fitness-Nuts app profile"
          />
        </a>
        <h2>
          <a href="https://fitness-nuts.herokuapp.com/" style={styles.anchor}>
            Fitness Nuts
          </a>
        </h2>
        <p style={styles.pTag}>
          {`Fitness Nuts allows users to create an account where they can keep
          track of their physical traits such as age, weight, and height. In
          adiition, the app provides a diverse list of workouts! `}
          <a
            href="https://github.com/kittytaylor55/Project2.git"
            style={styles.gitLink}
          >
            GitHub Repository
          </a>
        </p>
      </div>

      {/* Second card styling and html set up */}
      {/* <div style={styles.cardRight}>
        <a href="https://rocky-waters-73289.herokuapp.com/">
          <img style={styles.cardimg} src={noteTaker} alt="Note-taker-app" />
        </a>
        <h2>
          <a
            href="https://rocky-waters-73289.herokuapp.com/"
            style={styles.anchor}
          >
            Note-Taker App
          </a>
        </h2>
        <p style={styles.pTag}>
          {`The Note-Taker application allows users to easily create their own notes to and bring them up with the click of a
            button! The app features a home page that directs the user to 'notes' page once they click 'Get Started,' and previously
            saved notes will appear on the sidebar of the 'notes' page. Once the user enters text into the title and body section of
            the notes, a save icon will appear in the top-right corner of the page will enable the save functionality once clicked.
            The 'plus' icon also on the top-right corner of the page creates a new blank note when clicked. `}
          <a
            href="https://github.com/JG-77/Note-Taker-App.git"
            style={styles.gitLink}
          >
            GitHub Repository
          </a>
        </p>
      </div> */}
      {/* app 1 */}
      <div style={styles.card}>
        <img src={fitnessNuts} style={styles.cardimg} />
      </div>
      {/* app2 */}
      <div style={styles.cardRight}>
        <img src={noteTaker} style={styles.cardimg} />
      </div>
      {/* app 3 */}
      <div style={styles.card}>
        <img src={teamProfile} style={styles.cardimg} />
      </div>
      {/* app 4 */}
      <div style={styles.cardRight}>
        <img src={budgetTracker} style={styles.cardimg} />
      </div>
      {/* app 5 */}
      <div style={styles.card}>
        <img src={fitnessTracker} style={styles.cardimg} />
      </div>
      {/* app 6 */}
      <div style={styles.cardRight}>
        <img src={movieBuffs} style={styles.cardimg} />
      </div>
    </div>
  );
}
