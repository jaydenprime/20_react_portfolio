import React from 'react';
import "../App.css"

function Contact() {
    return (
      <section>
      <div className='contactPage'>
        <h1>Contact Me</h1>
        <form>
          <div class="form-group">
              <label for="name">Name</label>
              <input type="name" class="form-control" id="name" placeholder="Enter name"></input>
          </div>
          <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="Enter Email"></input>
          </div>
          <div class="form-group">
              <label for="message">Message</label>
              <input type="message" class="form-control" id="message" placeholder="Enter Message"></input>
          </div>
          <button type="submit" class="btn btn-primary" className='submitBtn'>Submit</button>
      </form>
      </div>
      </section>
    );
  }

  export default Contact