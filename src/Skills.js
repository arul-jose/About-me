import { BiLeftArrow } from 'react-icons/bi';
import './Skills.css';
import { navIcons } from './constants';
import { skillData } from './constants';


function Skills() {

  return (
    <div id="skills">
      <header>
        <div>{navIcons.label[1]}</div>
      </header>
      <div id='skill-wrapper'>
        <div id='skill-container'>
          {skillData.order.map((skillItem, ind) => {
            const { title, progress,scale } = skillData.data[skillItem];
            const progressStyle = {
              width: progress
            };
            const progressStylePercentage = {
              left: progress
            };
            
            return (
              <div id='skill-container-each'>
                <div className='title-container'>
                  {title}
                </div>
                <div className='percentage' style={progressStylePercentage}>
                  {/* {progress} */}
                  {scale}
                </div>
                <div className='progressBar-container'>
                  <div className='progressBar-base'>
                    <div className='progressBar' style={progressStyle}>
                      <div></div>
                    </div>
                  </div>
                </div>
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

export default Skills;























