import React from "react";
import './Output.css';



function Output(props)
{

  return (<div className="output-container">
            <div className="output-block">
                  {(props.loading===true)?
                     <img className="output-img" src={props.meme.url} alt="Select Image" />
                     :
                     <div class="loading-section">
                      <div class="loading">
                        <span>Generating...</span>
                      </div>               
                     </div> 
                  }
            </div>                      
          </div>);


}

export default Output;