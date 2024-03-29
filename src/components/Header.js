import { useState } from "react";
import { Container, Nav, Navbar, Button, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import api from "../API/api";
import Login from "./Login";
import Register from "./Register";

const Header = () => {
  const [logout, setLogout] = useState(false);
  const [loading, setLoading] = useState(false);
  const check = async () => {
    try {
      const user = await api.getAccount();
      if (user) {
        setLogout(true);
      } else {
        setLogout(false);
      }
    } catch (e) {
      setLogout(false);
    }
  };
  check();

  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showRegister, setShowRegister] = useState(false);
  const [name, setName] = useState("");

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  (async () => {
    try {
      let acc = await api.getAccount();
      setName(acc.name.split(" ")[0]);
    } catch (err) {
      setName("");
    }
  })();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await api.deleteCurrentSession();
      setLogout(!logout);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Quiz!</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>

          {logout ? (
            <>
              <p className="lead my-2" style={{ marginRight: "1rem" }}>
                Hello {name}!
              </p>
              {loading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <Button
                  className="btn btn-danger"
                  onClick={() => handleLogout()}
                >
                  Logout
                </Button>
              )}
            </>
          ) : (
            <>
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
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
