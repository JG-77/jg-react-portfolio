import React from 'react';
import '../../styles/Portfolio.css';
import fitnessNuts from '../../images/Fitness-Nuts.png';
import noteTaker from '../../images/Note-Taker-App.png';
import teamProfile from '../../images/Team-Profile-Gen.png';
import budgetTracker from '../../images/budget-tracker-app.png';
import fitnessTracker from '../../images/Fitness-tracker.png';
import movieBuffs from '../../images/Movie-Buffs.png';

//Project section set up and styling for each card
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
    color: 'white',
    width: '45%',
    minHeight: '250px',
    backgroundImage: `url(${fitnessNuts})`,
    backgroundSize: 'cover',
  },
  card2: {
    border: 'solid',
    color: 'white',
    width: '45%',
    minHeight: '250px',
    backgroundImage: `url(${noteTaker})`,
    backgroundSize: 'cover',
  },
  card3: {
    border: 'solid',
    color: 'white',
    width: '45%',
    minHeight: '250px',
    backgroundImage: `url(${teamProfile})`,
    backgroundSize: 'cover',
  },
  card4: {
    border: 'solid',
    color: 'white',
    width: '45%',
    minHeight: '250px',
    backgroundImage: `url(${budgetTracker})`,
    backgroundSize: 'cover',
  },
  card5: {
    border: 'solid',
    color: 'white',
    width: '45%',
    minHeight: '250px',
    backgroundImage: `url(${fitnessTracker})`,
    backgroundSize: 'cover',
  },
  card6: {
    border: 'solid',
    color: 'white',
    width: '45%',
    minHeight: '250px',
    backgroundImage: `url(${movieBuffs})`,
    backgroundSize: 'cover',
  },
  anchor: {
    color: 'rgb(0, 255, 213)',
    textDecoration: 'none',
  },
  anchorApp: {
    color: 'white',
  },
};

export default function Portfolio() {
  return (
    <div style={styles.divSect} className="portDiv">
      <h2 style={styles.h2}>Portfolio</h2>

      {/* app 1 */}

      <div style={styles.card} className="card">
        <div className="overlay">
          <h2 style={styles.h2} className="reveal">
            <a
              href="https://fitness-nuts.herokuapp.com/"
              style={styles.anchorApp}
            >
              Fitness Nuts Project
            </a>
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
      </div>

      {/* app2 */}

      <div style={styles.card2} className="card">
        <div className="overlay">
          <h2 style={styles.h2} className="reveal">
            <a
              href="https://rocky-waters-73289.herokuapp.com/"
              style={styles.anchorApp}
            >
              Note-Taker App
            </a>
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
      </div>

      {/* app 3 */}

      <div style={styles.card3} className="card">
        <div className="overlay">
          <h2 style={styles.h2} className="reveal">
            <a
              href="https://github.com/JG-77/Team-Profile-Generator-JG.git"
              style={styles.anchorApp}
            >
              Team Profile Generator
            </a>
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
      </div>

      {/* app 4 */}

      <div style={styles.card4} className="card">
        <div className="overlay">
          <h2 style={styles.h2} className="reveal">
            <a
              href="https://pwa-budget-tracker-jg.herokuapp.com/"
              style={styles.anchorApp}
            >
              Budget Tracker
            </a>
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
      </div>

      {/* app 5 */}

      <div style={styles.card5} className="card">
        <div className="overlay">
          <h2 style={styles.h2} className="reveal">
            <a
              href="https://workout-tracker-jg.herokuapp.com/"
              style={styles.anchorApp}
            >
              Fitness Tracker
            </a>
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
      </div>

      {/* app 6 */}

      <div style={styles.card6} className="card">
        <div className="overlay">
          <h2 style={styles.h2} className="reveal">
            <a
              href="https://jg-77.github.io/Movie-Buffs-Group-Project/"
              style={styles.anchorApp}
            >
              Movie Buffs Project
            </a>
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
      </div>
    </div>
  );
}
