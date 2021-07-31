import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <form
        action="mailto:jesguadarrama98@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <label for="name">Name:</label> <br />
        <input type="text" name="name" /> <br />
        <label for="email">Email:</label> <br />
        <input type="email" name="email" /> <br />
        <label for="message">Message:</label> <br />
        <input type="text" name="message" /> <br />
        <input type="submit" value="Submit" />
      </form>
      {/* 
  
  <input type="submit" value="Submit">
</form>  */}
    </div>
  );
}
