import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbarr.css'
import account from "./assets/account.png"

const Navbarr = () => {
  return (
    <div className='header'>
      <Navbar expand="lg" className="navbarr">
      <Container className='m-0'>
        <Navbar.Brand href="/">Team Pragmatics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto link">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/placement">Placements</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <img className='account-logo' src={account} alt='logo' width={30} height={30}/>
            <NavDropdown  id="basic-nav-dropdown" >  
              <NavDropdown.Item  href="/login" className='gradient-text'>Login</NavDropdown.Item>
              <NavDropdown.Item href="/dashboard" className='gradient-text'>Dashboard</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr
