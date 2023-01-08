import React from 'react';
import '../App.css'
import Project from '../components/Projects.js'
import betterweather from '../assets/betterweather.PNG'
import codex from '../assets/codex.png'
import passgen from '../assets/passgen.PNG'
import pawfectmatch from '../assets/pawfectmatch.png'

function Portfolio() {
    return (
      <section>
        <div className='projectPage'>
          <a href="https://github.com/jaydenprime/06_betterweather">
            <Project
              title="BetterWeather"
              imageUrl={betterweather} 
            />
          </a>

          <a href="https://github.com/jaydenprime/Code.X">
            <Project
              title="Code.X"
              imageUrl={codex} 
            />
          </a>

          <a href="https://github.com/jaydenprime/03_random_password_generator">
            <Project
              title="Random Password Generator"
              imageUrl={passgen}
            />
          </a>
          <a href="https://github.com/jaydenprime/Pet_Dating_App_MERN">
            <Project
              title="Pawfect Match"
              imageUrl={pawfectmatch}
            />
          </a>
        </div>
        </section>
    )
}

export default Portfolio