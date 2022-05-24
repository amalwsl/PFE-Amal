import React from 'react';
import { Navbar, Nav,Container,NavDropdown } from 'react-bootstrap';
import ProfilPopover from './ProfilPopover';
import NotificationsPopover from './notification/notifPopover';
import '../App.css'



const NavBar=()=>{
    return(
        <Navbar className='navbar' variant='dark'  expand="lg">
            <Container className='navbarContainer' >
                <Navbar.Brand href="/">
                    <img src='IADEWHITE.png' alt='logo' width="80%" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/calendar">Agenda</Nav.Link>
                    <NavDropdown title="Participants" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/users">My Company</NavDropdown.Item>
                    <NavDropdown.Item href="/users">Delegation</NavDropdown.Item>
                    <NavDropdown.Item href="/users">Exhibitors</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/users">Professional Visitors</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <ProfilPopover  />
                <NotificationsPopover  />
            </Container>
        </Navbar>
    );

}

export default NavBar;


