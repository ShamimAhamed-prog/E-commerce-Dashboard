import React from 'react'
import {Navbar} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import {Link}  from 'react-router-dom'

function Header () {
    return (
        <div>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
    <Nav className="me-auto navbar_wrapper">
      <Link to="/add">AddProduct</Link>
      <Link to="/update">updateProduct</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </Nav>
    </Container>
  </Navbar>
  </div>
    )
}

export default Header
