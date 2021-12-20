import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"

function NavBar(props) {
    return (
        <div className='border_bottom sticky-top'>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home"> {props.name} </Navbar.Brand>
                <Nav className="me-auto pos">
                <Nav.Link href="#home">About</Nav.Link>
                <Nav.Link href="#features">Projets</Nav.Link>
                <Nav.Link href="https://github.com/bahaaddine">Contact</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavBar
