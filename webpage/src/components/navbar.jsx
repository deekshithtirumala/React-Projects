import react, {Component} from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';

class Navigation extends Component {
    state = {  } 
    render() { 
        return (
            <Navbar expand='sm' bg="light">
                <Container>
                    <Navbar.Brand href="/home">Euraka!</Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbar-nav' />
                    <Navbar.Collapse id="navbar-nav" className='justify-content-end'>
                        <Nav >
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Countact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
 

export default Navigation;