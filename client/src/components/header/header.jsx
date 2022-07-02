import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './header.css';

const Header = (props) => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="#home">ZenMob Design</Navbar.Brand>
                {props.showMenu && <Navbar.Toggle aria-controls="basic-navbar-nav" />}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {props.children}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;