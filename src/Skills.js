import './Skills.css';
import { navIcons } from './constants';
import React, { useState } from 'react';
import { skillData } from './constants';
import { WiDayCloudy } from 'react-icons/wi';

function Skills() {

  return (
    <div id="skills-page">
      <header>
        <span>{navIcons.label[1]}</span>
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
                <div  className='progressBar-container'>
                  <div className='progressBar-base'>
                    <div className='progressBar'></div>
                  </div>
                {skillItemObject.progress}
                </div>
              </div>
              
            )
            
          })}
          {/* {skillData.order.map((skillitem, ind) => {
            const skillItemArray = skillData.data[skillitem];
            //console.log(skillItemArray);
            return (
             <div id='skill-container-each'>
              <div className='title-container'>
                <div className='title-text'>
                  {skillItemArray.map((item, index) => {
                    return (
                      <div>
                        {item}
                      </div>
                    )
                  })}
                </div>
                </div>

                <div className='progressBar-container'>
                 
                  <div className='progressBar-base'>
                    <div className='progressBar' >

                    </div>

                  </div>
                </div>
              </div>
            )
          })} */}


          {/* <div className='skill-item-container'>
            <div className='skill-title'>JAVA</div>
            <div className='item-scale'>
              <div className='itembar-base'>
                <div className='itembar-progress' style={{
                  width: `${data[html].progrs}70%`
                }
                }>

                </div>

              </div>

            </div>
          </div> */}
        </div>
      </div>

    </div>
  )
}

export default Skills























{/* <section className='skill-section'>
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
      </section> */}