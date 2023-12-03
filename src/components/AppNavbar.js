import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";



const AppNavbar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" style={{color: "#FFD700"}}>Slawfirm</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/clients">My Clients</Nav.Link>
            <Nav.Link href="/documents">Documents</Nav.Link>
            <Nav.Link href="/generate/retainer_agreement">Generate</Nav.Link>
          </Nav>
        </Container>
  </Navbar>
);

export default AppNavbar;
