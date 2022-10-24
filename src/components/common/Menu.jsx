import React from 'react';
import { Nav, Navbar,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../view/producto/Menu.css"

const Menu = () => {
    return (
     <>
      <Navbar bg="dark" expand="lg" className='navbar-dark Navbar'>
      <Container>
        <Navbar.Brand as={Link} to="/">Recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/administrador">Administrador</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </>
    );
};

export default Menu;