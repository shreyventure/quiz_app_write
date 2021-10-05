import { Container, Nav, Navbar } from "react-bootstrap";
import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Quiz!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <a
            href="https://www.instagram.com/shreyventure/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            <BsInstagram className="mx-2 social-icon" />
          </a>

          <a
            href="https://github.com/shreyventure"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            <BsGithub className="mx-2 social-icon" />
          </a>
          <a
            href="https://twitter.com/ShreyasShrawage"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#fff" }}
          >
            <BsTwitter className="mx-2 social-icon" />
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
