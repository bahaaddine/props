import React from "react";
import './Contact.css'
import {Nav} from "react-bootstrap"

const Contact =()=>{
    return(
        <div>
            <form>
                    <label hmtlfor="first_name">First name:</label>
                     <input type="text" name="first_name" />
                     <label hmtlfor="last_name">Last name:</label>
                     <input type="text" name="last_name" />
                     <label hmtlfor="description">Description:</label>
                <textarea rows="5" cols="50" name="description" placeholder="Enter description here...">
                </textarea>
            </form>
            <Nav.Link href="https://github.com/bahaaddine">Contact</Nav.Link>
            <button className="card_button">SUBMIT</button>
        </div>
    )
}
export default Contact;