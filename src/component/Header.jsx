import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <div className="w-100" style={{backgroundColor:'#FFF1DA',height:'70px', color:'black'}}>
 <Navbar >
        <Container>
          <Navbar.Brand  >
           <h2> <span style={{color:'green'}}>F</span>ood  <span style={{color:'green'}}>Z</span>ero</h2>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    </>
  )
}

export default Header