import './Career.css';
import React from 'react';
import { career } from './constants';

function Career() {
  return (
    
    <div id='career'>
      

      <section>
        <div className='timeline-wrapper'>
          <div className='timeline'>

            {career.order.map((item, ind) => {
              const itemDescriptionArray = career.data[item];
              return (
                <div className={"item-container " + (ind % 2 == 0 ? "left" : "right")}>
                  <div className="content">
                    {itemDescriptionArray.map((itemDescription, index) => {
                      return (
                        
                          <div className='content-items'>
                            {itemDescription}
                          </div>

                  
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <div className='footer'></div>
        </div>
      </section>

    </div>
  )
}

export default Career
