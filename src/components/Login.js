import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";

function Login({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-secondary"
            variant="secondary"
            onClick={handleClose}
          >
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
