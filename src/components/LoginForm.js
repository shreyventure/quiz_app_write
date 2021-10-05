import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Form } from "react-bootstrap";
import api from "../API/api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const sumbited = async (e) => {
    e.preventDefault();
    await api.createSession(email, password);
    setEmail("");
    setPassword("");
    setSuccess(true);
  };

  return (
    <Form onSubmit={(e) => sumbited(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button className="btn btn-success" variant="primary" type="submit">
        Submit
      </Button>
      {success ? <p className="text-success">You are now logged in.</p> : null}
    </Form>
  );
};

export default LoginForm;
