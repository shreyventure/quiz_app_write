import Button from "@restart/ui/esm/Button";
import { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import api from "../API/api";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sumbited = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.createAccount(email, password, name);
      await api.createSession(email, password);
      setName("");
      setEmail("");
      setPassword("");
      setError(false);
      setSuccess(true);
      const user = await api.getAccount();
      console.log(user);
    } catch (err) {
      console.error(err);
      setSuccess(false);
      setError("Something went wrong");
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
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Create Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="btn btn-success" variant="primary" type="submit">
          Submit
        </Button>
        {success ? (
          <p className="text-success">
            Account Successfully created. Please login to continue :)
          </p>
        ) : null}
        {error ? <p className="text-danger">{error} :(</p> : null}
      </Form>
    </>
  );
};

export default RegisterForm;
