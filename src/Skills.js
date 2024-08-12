
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

    </div>
  )
}

export default Skills;























