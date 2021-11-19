import React from 'react';
import { Navbar, NavbarBrand, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const navbar = () => {
  return (
    <div>
      <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
        <Container>
          <NavbarBrand >Developing</NavbarBrand>
          <Nav className="ml-auto ">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link as={Link} to="/home">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/contactUs">Contact Us</Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;