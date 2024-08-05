import './Career.css';
import React from 'react';
import { career } from './constants';

function Career() {
  return (
    <div id='career'>
      <section>
        <div id='career-title'>
          <div>Education History</div>
        </div>
      </section>

      <section>
        <div id='career-timeline-container'>
          {/* {career.institution.map((institutionName,ind) =>{
            return(
              <div>key={institutionName}</div>
            )
          })} */}
          
          
          {career.order.map((item, ind) => {
            const itemDescriptionArray = career.data[item];
            return (
              <div className={"item-container " + (ind % 2 == 0 ? "left" : "right")}>
                  {itemDescriptionArray.map((itemDescription, index) => {
                    return (
                      <div> 
                        {itemDescription}
                      </div>
                    )
                  })}
              </div>
            )
          })}
        </div>
      </section>

    </div>
  )
}

export default Career
