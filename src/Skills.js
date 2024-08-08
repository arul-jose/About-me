import './Skills.css';
import { navIcons } from './constants';
import React, { useState } from 'react';
import { skillData } from './constants';
import { WiDayCloudy } from 'react-icons/wi';

function Skills() {

  return (
    <div id="skills-page">
      <header>
        <div>{navIcons.label[1]}</div>
      </header>
      <div id='skill-wrapper'>
        <div id='skill-container'>
          {skillData.order.map((skillItem,ind) =>{
            const skillItemObject = skillData.data[skillItem];
            return(
              <div id='skill-container-each'>
                <div className='title-container'>
                {skillItemObject.title}
                
                </div>
                <div className='percentage'>
                {skillItemObject.progress}
                </div>
                <div  className='progressBar-container'>
                  <div className='progressBar-base'>
                    <div className='progressBar'>    
                                       
          
                    </div>
                    
                  </div>
                {/* {skillItemObject.progress} */}
                </div>
                {/* <div className='percentage'>
                {skillItemObject.progress}
                </div> */}
              </div>
              
            )
            
          })}
          
        </div>
      </div>


{/* //-------------------- */}
      {/* <div class="container">
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
    </div> */}
{/* --------------------------------------------------- */}





    </div>
  )
}

export default Skills























