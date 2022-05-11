import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="#home">ZenMob Design</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="custom-nav-link">Acasă</Link>
                        <Link to="/about" className="custom-nav-link">Despre noi</Link>
                        <Link to="/login" className="custom-nav-link">Autentificare</Link>
                        <Link to="/register" className="custom-nav-link">Înregistrare</Link>
                        <Link to="/cart" className="custom-nav-link"><FiShoppingCart /></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;