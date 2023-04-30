import React from 'react';
import {  Link } from "react-router-dom";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';

export default function() {
    return (
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Log-In Navabr</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Links</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dummy Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dummy Link 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dummy Link 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}