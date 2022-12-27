import React from 'react';
import '../App.css'

function Resume() {
    return (
      <section>
      <div className='resumePage'>
        <div>
          <h1>My Resume</h1>
        </div>
        <div>
          <h2>Front End</h2>
          <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
          </ul>
          <h2>Back End</h2>
          <ul>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
          </ul>
        </div>
      </div>
      </section>
    );
  }

export default Resume