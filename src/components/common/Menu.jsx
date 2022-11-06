import React from 'react';
import { Nav, Navbar,Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "../view/producto/Menu.css"

const Menu = ({Usuario,setUsuario}) => {

    
    const navigate = useNavigate();


     const logout = ()=>{
      localStorage.removeItem("usuario")
      setUsuario({})
      navigate("/")
    }
   



    return (
     <>
     <header className='Navbar'>
      <Navbar bg="dark" expand="lg" className='navbar-dark '>
      <Container>
        <Navbar.Brand as={Link} to="/">Recetas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            {
              (Usuario.NombreUsuario)?<>
                <Nav.Link as={Link} to="/administrador">Administrador</Nav.Link>
                <Nav.Link as={Link} to="/registro">Registrarse</Nav.Link>
                <button className='btn btn-primary' onClick={logout}>Logout</button>
                
              </>: <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     </header>
     </>
    );
};

export default Menu;