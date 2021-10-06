import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import api from "../API/api";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sumbited = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.createSession(email, password);
      setError(null);
      setSuccess(true);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError("Something went wrong :(");
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : null}
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
        {success ? (
          <p className="text-success">You are now logged in.</p>
        ) : null}
        {error ? <p className="text-danger">{error}</p> : null}
      </Form>
    </>
  );
};

export default LoginForm;
