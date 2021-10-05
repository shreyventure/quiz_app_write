import { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Quiz!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Button onClick={() => handleShowLogin()}>Login</Button>
          <Login
            show={showLogin}
            handleShow={handleShowLogin}
            handleClose={handleCloseLogin}
          />

          <Button onClick={() => handleShowRegister()} className="mx-2">
            Sign Up!
          </Button>
          <Register
            show={showRegister}
            handleShow={handleShowRegister}
            handleClose={handleCloseRegister}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
