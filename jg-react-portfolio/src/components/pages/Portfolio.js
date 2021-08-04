import React from 'react';
import '../../styles/Portfolio.css';
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
    margin: '0px 20px 10px 20px',
    color: 'white',
    width: '45%',
    display: 'inline-block',
    minHeight: '250px',
  },
  cardRight: {
    border: 'solid',
    margin: '0px 20px 10px 20px',
    color: 'white',
    width: '45%',
    display: 'inline-block',
    float: 'right',
    minHeight: '250px',
  },
  cardimg: {
    height: '250px',
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    objectFill: 'fill',
    width: '100%',
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
