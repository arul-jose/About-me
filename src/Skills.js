import './Skills.css';

import React from 'react'

function Skills() {
  return (
    <div id='skills'>

      <section className='skill-section'>
        <div class="container">
          
          <section>
            <div class="heading">Skills</div>
          </section>

          <div class="horizontal-bars">
            <div class="bar">
              <div class="info">
                <span>HTML</span>
              </div>
              <div class="progress-line html">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>CSS</span>
              </div>
              <div class="progress-line css">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>SQL</span>
              </div>
              <div class="progress-line sql">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>Java</span>
              </div>
              <div class="progress-line java">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>Javascript</span>
              </div>
              <div class="progress-line javascript">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
