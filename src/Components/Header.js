import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Form, FormControl, Container } from 'react-bootstrap';
import { Height } from '@mui/icons-material';

const Header = () => {
  const fullWidthNavbar = {
    width: '100%',
    paddingLeft: '0',
    paddingRight: '0',
    maxWidth: '100%',

  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={fullWidthNavbar}>
      <Container fluid style={{ paddingLeft: '30', paddingRight: '30' }}>
        <Navbar.Brand href="/">
          Travel
        </Navbar.Brand>
        <Form className="d-flex ms-3">
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="px-2 text-secondary">Home</Nav.Link>
            <Nav.Link href="/#sliderSection" className="px-2 text-white">Category</Nav.Link>
            <Nav.Link href="/gallery" className="px-2 text-white">Gallery</Nav.Link>
            <Nav.Link href="/about-us" className="px-2 text-white">About Us</Nav.Link>
            <Nav.Link href="/contact-us" className="px-2 text-white">Contact Us</Nav.Link>
          </Nav>
          <div className="text-end ms-3">
            <Button variant="outline-light" className="me-2">Login</Button>
            <Button style={{ backgroundColor: '#3AA6B9', borderColor: '#96EFFF' }}>Sign-up</Button>          
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
