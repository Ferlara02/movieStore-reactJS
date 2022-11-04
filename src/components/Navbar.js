import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Logo } from "../assets/logo";

function Menu() {
    return (
        <Navbar className="header" expand="md">
            <Container>
                <CartWidget/>
                <Navbar.Brand className="logoDiv" href="#home"> <Logo className="logo" /> Movie Store </Navbar.Brand>
                <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Estrenos</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Drama</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Romance
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Noir</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;