import React from 'react';

const styles = {
  contactHead: {
    textAlign: 'center',
  },
  divSect: {
    fontFamily: 'arial',
  },
  form: {
    textAlign: 'start',
  },
  messageInput: {
    height: '100px',
    width: '250px',
    marginBottom: '20px',
  },
  inputs: {
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
        <input type="text" name="name" style={styles.inputs} /> <br />
        <label for="email">Email:</label> <br />
        <input type="email" name="email" style={styles.inputs} /> <br />
        <label for="message">Message:</label> <br />
        <input type="text" name="message" style={styles.messageInput} /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
