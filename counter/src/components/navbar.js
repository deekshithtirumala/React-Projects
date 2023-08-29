import React, { Component } from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

class Navigation extends Component {
    state = {  } 
    render() { 
        return (
            <Navbar expand="lg">
                <Container>
                    <Navbar.brand href="/">Euraka !</Navbar.brand>
                    <Navbar.toggle aria-controls="navbar-nav" />
                    <Nav>
                        <Navbar.link href="/home">Home</Navbar.link>
                        <Navbar.link href="/about">About</Navbar.link>
                        <Navbar.link href="/contact">Contact Us</Navbar.link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
 
export default Navigation;