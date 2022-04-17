import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="/"><h3>Travel Guide Agency</h3> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
    </Nav>
    <Nav>
      <Nav.Link href="/services">Services</Nav.Link>
      <Nav.Link eventKey={2} href="/blogs">Blogs</Nav.Link>
      <Nav.Link eventKey={3} href="about">About Me</Nav.Link>
      <Nav.Link eventKey={4} href="login">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;