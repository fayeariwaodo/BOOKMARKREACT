import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import pic from './BOOKMARKMANAGER IMAGES/logo-bookmark.svg'

const Bookmark = () => {
  return (
  <div>
   <Navbar bg="light" expand="lg">
  <Container>
    {/* <Navbar.Brand href="#home">{}</Navbar.Brand> */}
    <img src={pic} alt="" />
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">FEATURES</Nav.Link>
        <Nav.Link href="#link">PRICING</Nav.Link>
        <Nav.Link href="#link">CONTACT</Nav.Link>
        <Nav.Link href="#link"><button className='log' >LOGIN</button></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar> 




  </div>
  )
}

export default Bookmark