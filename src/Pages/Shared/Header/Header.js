import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand eventKey={1} as={Link} to="/"><h3>Travel Guide Agency</h3> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link as={Link} eventKey={2} to="services">Services</Nav.Link>
            <Nav.Link as={Link} eventKey={3} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} eventKey={4} to="about">About Me</Nav.Link>
            {
              user ?
                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                :
                <Nav.Link eventKey={5} as={Link} to="login">
                  Login
                </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;