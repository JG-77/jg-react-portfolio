import React from 'react';
import '../../styles/Portfolio.css';
import fitnessNuts from '../../images/Fitness-Nuts.png';
import noteTaker from '../../images/Note-Taker-App.png';
import teamProfile from '../../images/Team-Profile-Gen.png';
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
    width: '96%',
  },
  h2: {
    textAlign: 'center',
    fontSize: '30px',
  },
  card: {
    border: 'solid',
    margin: '0px 20px 20px 20px',
    color: 'white',
    width: '45%',
    display: 'inline-block',
    minHeight: '250px',
    backgroundImage: `url(${fitnessNuts})`,
    backgroundSize: 'cover',
  },
  card2: {
    border: 'solid',
    margin: '0px 20px 20px 20px',
    color: 'white',
    width: '45%',
    display: 'inline-block',
    float: 'right',
    minHeight: '250px',
    backgroundImage: `url(${noteTaker})`,
    backgroundSize: 'cover',
  },
  card3: {
    border: 'solid',
    margin: '0px 20px 20px 20px',
    color: 'white',
    width: '45%',
    display: 'inline-block',
    minHeight: '250px',
    backgroundImage: `url(${teamProfile})`,
    backgroundSize: 'cover',
  },
  card4: {
    border: 'solid',
    margin: '0px 20px 20px 20px',
    color: 'white',
    width: '45%',
    display: 'inline-block',
    float: 'right',
    minHeight: '250px',
    backgroundImage: `url(${budgetTracker})`,
    backgroundSize: 'cover',
  },
  card5: {
    border: 'solid',
    margin: '0px 20px 20px 20px',
    color: 'white',
    width: '45%',
    display: 'inline-block',
    minHeight: '250px',
    backgroundImage: `url(${fitnessTracker})`,
    backgroundSize: 'cover',
  },
  card6: {
    border: 'solid',
    margin: '0px 20px 20px 20px',
    color: 'white',
    width: '45%',
    display: 'inline-block',
    float: 'right',
    minHeight: '250px',
    backgroundImage: `url(${movieBuffs})`,
    backgroundSize: 'cover',
  },
  // cardimg: {
  //   height: '250px',
  //   maxWidth: '100%',
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   objectFill: 'fill',
  //   width: '100%',
  // },
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
  imgg: {
    backgroundImage: `url(${fitnessNuts})`,
    height: '250px',
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    objectFill: 'fill',
    width: '100%',
  },
};

export default function Portfolio() {
  return (
    <div style={styles.divSect}>
      <h2 style={styles.h2}>Portfolio</h2>

      {/* app 1 */}
      <div style={styles.card}></div>
      {/* app2 */}
      <div style={styles.card2}></div>
      {/* app 3 */}
      <div style={styles.card3}></div>
      {/* app 4 */}
      <div style={styles.card4}></div>
      {/* app 5 */}
      <div style={styles.card5}></div>
      {/* app 6 */}
      <div style={styles.card6}></div>
    </div>
  );
}
