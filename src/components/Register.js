import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import RegisterForm from "./RegisterForm";

function Register({ show, handleClose }) {
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header bg="info" closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegisterForm />
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

export default Register;
