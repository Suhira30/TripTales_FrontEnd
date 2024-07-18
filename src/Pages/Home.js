import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Homebar from './Homebar';

export const Home = () => {
  return (
    <div>
      <Homebar />
      <Container>
        <Navbar expand="lg" className="justify-content-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#category">Category</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Home;
