import React from 'react';
import './About.css';

function About() {
  return (
    <div>
       <div class="container">
        <div class="skill-box">
            <span class="title">HTML</span>
            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">90%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">CSS</span>
            <div class="skill-bar">
                <span class="skill-per css">
                    <span class="tooltip">70%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">JavaScript</span>
            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>
        <div class="skill-box">
            <span class="title">NodeJS</span>
            <div class="skill-bar">
                <span class="skill-per nodejs">
                    <span class="tooltip">30%</span>
                </span>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
