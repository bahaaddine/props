import React from 'react'
import "./Description.css"

function Description(props) {
    return (
        <div className=" desc">
          <h5>Hello,my name is <span className="color">{props.name}</span>,<br/>and nothing impossible in the world ❤️</h5>
          {props.children}  
        </div>
    )
}

export default Description