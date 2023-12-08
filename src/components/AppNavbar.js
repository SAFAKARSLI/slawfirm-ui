import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";



const AppNavbar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" style={{color: "#FFD700"}}>Slawfirm</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/clients">My Clients</Nav.Link>
            <Nav.Link as={Link} to="/documents">Documents</Nav.Link>
            <Nav.Link as={Link} to="/generate/retainer_agreement">Generate</Nav.Link>
          </Nav>
        </Container>
  </Navbar>
);

export default AppNavbar;
