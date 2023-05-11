import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
    <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/k4d9cgzL/resta.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <strong className='p-2 mt-5' > Kate Restaurant</strong>
          </Navbar.Brand>
          </Container>
      </Navbar>
    </div>
  )
}

export default Header