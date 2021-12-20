import React from 'react'
import "./Project.css"

function Project(props) {
    return (
        <div className="card" >
            <div className="card_body">
              <img src={props.src} className="card_img" />  
              <h3 className="card_title">{props.title}</h3>
              <p>{props.par}</p>
            </div>
          <button className="card_button">View Project</button>
        
        </div>
    )
}
export default Project