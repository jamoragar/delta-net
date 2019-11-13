import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';

import './components.css';

const NavigationBar = () => {
    return(
        <div className='navbar'>
            <Navbar bg="dark" variant="dark" expand='lg' fixed='top'>
                <Navbar.Brand href='/'>
                    <h2>Delta Net</h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/Nosotros">
                            <i className="fas fa-users"></i>
                            Nosotros
                        </Nav.Link>
                        <Nav.Link href="/Servicios">
                            <i className="fas fa-network-wired"></i>
                            Servicios
                        </Nav.Link>
                        <Nav.Link href="/Contacto">
                            <i className="far fa-envelope"></i>
                            Contacto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
}

export default NavigationBar;