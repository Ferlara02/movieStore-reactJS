import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import { Logo } from "../assets/logo";
import {Link} from "react-router-dom";

function Menu() {
    return (
        <Navbar className="header" expand="md">
            <Container>
                <CartWidget/>
                <Link className="logoDiv" to="/"> <Logo className="logo" /> Movie Store </Link>
                <Navbar.Toggle className="toggler" aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav" className='me'>
                    <Nav className="me-auto">
                        <NavDropdown title="Categorías" id="basic-nav-dropdown" className='dropdown'>
                            <Link to="/category/drama" className="navItem">Drama</Link>
                            <Link to="/category/romance" className="navItem">
                                Romance
                            </Link>
                            <Link to="/category/sci-fi" className="navItem">Sci - Fi</Link>
                            <Link to="/category/terror" className="navItem">
                                Terror
                            </Link>
                        </NavDropdown>
                        <Link to="/" className="navItem">Home</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;