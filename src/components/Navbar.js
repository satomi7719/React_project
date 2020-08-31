import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
      text-decoration: none
    }
  }
`;

const MyNavbar = () => {
  return (
    <Styles className="header">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="Homepage">
            Hawaii Travel
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="Homepage">
                Home
              </Nav.Link>
              <Nav.Link href="Reservations">
                Hotel Reservations
              </Nav.Link>
              <Nav.Link href="Faq">
                FAQ
              </Nav.Link>
              <Nav.Link href="ContactUs">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Styles>
  );
}

export default MyNavbar;