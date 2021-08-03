import React from 'react';
import fitnessNuts from '../../images/Fitness-Nuts.png';

const styles = {
  divSect: {
    background: 'rgba(0, 0, 0, 0.7)',
    border: 'solid',
    margin: '0px 20px 0px',
    fontFamily: 'arial',
    //height: '450px',
    color: 'white',
    flexWrap: 'wrap',
    display: 'inline-block',
  },
  h2: {
    textAlign: 'center',
  },
  card: {
    //background: 'rgba(0, 0, 0, 0.7)',
    border: 'solid',
    margin: '0px 10px 10px 10px',
    //fontFamily: 'arial',
    //height: '450px',
    color: 'white',
    width: '47%',
    textAlign: 'center',
    display: 'inline-block',
  },
  cardimg: {
    maxHeight: '250px',
    maxWidth: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  pTag: {
    textAlign: 'justify',
    margin: '0px 10px 0px',
  },
  anchor: {
    //textDecoration: 'none',
    color: 'rgb(0, 255, 213)',
  },
};

export default function Portfolio() {
  return (
    <div style={styles.divSect}>
      <h2 style={styles.h2}>Portfolio</h2>

      <div style={styles.card}>
        <a href="https://fitness-nuts.herokuapp.com/">
          <img
            style={styles.cardimg}
            src={fitnessNuts}
            class="appIMG"
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
            style={styles.anchor}
          >
            Repository Link
          </a>
        </p>
      </div>

      <div style={styles.card}>
        <a href="https://fitness-nuts.herokuapp.com/">
          <img
            style={styles.cardimg}
            src={fitnessNuts}
            class="appIMG"
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
            style={styles.anchor}
          >
            Repository Link
          </a>
        </p>
      </div>
    </div>
  );
}
