import React from 'react';
import '../../styles/Contact.css';

//Contact  form styling and html set up
const styles = {
  contactHead: {
    textAlign: 'center',
    fontSize: '30px',
  },
  divSect: {
    background: 'rgba(0, 0, 0, 0.7)',
    fontFamily: 'arial',
    color: 'white',
    border: 'solid',
    margin: '0px 20px 0px 20px',
    height: '450px',
  },
  form: {
    textAlign: 'start',
    marginLeft: '10px',
    fontSize: '18px',
  },
  messageInput: {
    height: '100px',
    width: '500px',
    marginBottom: '20px',
    marginTop: '5px',
  },
  inputs: {
    marginBottom: '20px',
    width: '500px',
    marginTop: '5px',
  },
  submit: {
    marginBottom: '20px',
  },
};

export default function Contact() {
  return (
    <div style={styles.divSect}>
      <h2 style={styles.contactHead}>Contact</h2>
      <form
        style={styles.form}
        action="mailto:jesguadarrama98@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <label for="name">Name:</label> <br />
        <input
          type="text"
          name="name"
          style={styles.inputs}
          className="inputs"
        />{' '}
        <br />
        <label for="email">Email:</label> <br />
        <input
          type="email"
          name="email"
          style={styles.inputs}
          className="inputs"
        />
        <br />
        <label for="message">Message:</label> <br />
        <input
          type="text"
          name="message"
          style={styles.messageInput}
          className="inputs"
        />
        <br />
        <input type="submit" value="Submit" style={styles.submit} />
      </form>
    </div>
  );
}
