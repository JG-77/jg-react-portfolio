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
    color: 'rgb(0, 255, 213)',
    textDecoration: 'none',
  },
  // gitLink: {
  //   color: 'rgb(0, 255, 213)',
  //   //textDecoration: 'none',
  // },
  // imgg: {
  //   backgroundImage: `url(${fitnessNuts})`,
  //   height: '250px',
  //   maxWidth: '100%',
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   objectFill: 'fill',
  //   width: '100%',
  // },
};

export default function Portfolio() {
  return (
    <div style={styles.divSect}>
      <h2 style={styles.h2}>Portfolio</h2>

      {/* app 1 */}
      <a href="https://fitness-nuts.herokuapp.com/">
        <div style={styles.card} className="card">
          <h2 style={styles.h2} className="reveal">
            Fitness Nuts Project
          </h2>
          <h2 style={styles.h2} className="reveal">
            <a
              style={styles.anchor}
              href="https://github.com/kittytaylor55/Project2.git"
              className="reveal"
            >
              GitHub Repository
            </a>
          </h2>
        </div>
      </a>
      {/* app2 */}
      <a href="https://rocky-waters-73289.herokuapp.com/">
        <div style={styles.card2} className="card">
          <h2 style={styles.h2} className="reveal">
            Note-Taker App
          </h2>
          <h2 style={styles.h2} className="reveal">
            <a
              style={styles.anchor}
              href="https://github.com/JG-77/Note-Taker-App.git"
              className="reveal"
            >
              GitHub Repository
            </a>
          </h2>
        </div>
      </a>
      {/* app 3 */}
      <a href="https://github.com/JG-77/Team-Profile-Generator-JG.git">
        <div style={styles.card3} className="card">
          <h2 style={styles.h2} className="reveal">
            Team Profile Generator
          </h2>
          <h2 style={styles.h2} className="reveal">
            <a
              style={styles.anchor}
              href="https://github.com/JG-77/Team-Profile-Generator-JG/blob/main/README.md"
              className="reveal"
            >
              GitHub Repository
            </a>
          </h2>
        </div>
      </a>
      {/* app 4 */}
      <a href="https://pwa-budget-tracker-jg.herokuapp.com/">
        <div style={styles.card4} className="card">
          <h2 style={styles.h2} className="reveal">
            Budget Tracker
          </h2>
          <h2 style={styles.h2} className="reveal">
            <a
              style={styles.anchor}
              href="https://github.com/JG-77/pwa_budget_tracker.git"
              className="reveal"
            >
              GitHub Repository
            </a>
          </h2>
        </div>
      </a>
      {/* app 5 */}
      <a href="https://workout-tracker-jg.herokuapp.com/">
        <div style={styles.card5} className="card">
          <h2 style={styles.h2} className="reveal">
            Fitness Tracker
          </h2>
          <h2 style={styles.h2} className="reveal">
            <a
              style={styles.anchor}
              href="https://github.com/JG-77/workout_tracker_app.git"
              className="reveal"
            >
              GitHub Repository
            </a>
          </h2>
        </div>
      </a>
      {/* app 6 */}

      <a href="https://jg-77.github.io/Movie-Buffs-Group-Project/">
        <div style={styles.card6} className="card">
          <h2 style={styles.h2} className="reveal">
            Movie Buffs Project
          </h2>
          <h2 style={styles.h2} className="reveal">
            <a
              style={styles.anchor}
              href="https://github.com/JG-77/Movie-Buffs-Group-Project.git"
              className="reveal"
            >
              GitHub Repository
            </a>
          </h2>
        </div>
      </a>
    </div>
  );
}
