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
            <Project
              title="BetterWeather"
              imageUrl={betterweather} 
            />
            <Project
              title="Code.X"
              imageUrl={codex} 
            />
            <Project
              title="Random Password Generator"
              imageUrl={passgen}
            />
            <Project
              title="Pawfect Match"
              imageUrl={pawfectmatch} 
            />
        </div>
        </section>
    )
}

export default Portfolio