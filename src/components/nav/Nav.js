import React from 'react'
import {Container, Nav, Navbar, Button, NavDropdown} from 'react-bootstrap'
import hotelLogo from '../../assets/hotels.png'
// import './Nav.css'

const NavBar = () => {
    return (
        <header className="header-nav">
            <Navbar expand="lg" className="fill px-lg-0 py-0 px-3">
                <Container>
                    <Navbar.Brand href="#">
                        <img src={hotelLogo} alt="hotel logo" />
                        Hotels
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                    <Nav className="ms-auto" navbarScroll>
                        <Nav.Link href="#" className="mb-2 mb-lg-0">HOME</Nav.Link>
                        <Nav.Link href="#" className="mb-2 mb-lg-0">ABOUT</Nav.Link>
                        <Nav.Link href="#" className="mb-2 mb-lg-0">SERVICES</Nav.Link>
                        <Nav.Link href="#" className="mb-2 mb-lg-0">CONTACT</Nav.Link>
                        <Nav.Link>
                            <Button href="#booking" variant="primary" className="ml-3 book">Book Now</Button>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar
