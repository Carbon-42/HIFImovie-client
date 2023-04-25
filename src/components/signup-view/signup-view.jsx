import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "../../index.scss";

export const SignupView = ({ setAlert }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email,
      birthday: birthday,
    };

    fetch("https://hifi-movie-api.onrender.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        setAlert("Signup successful! Please login.");
      } else {
        setAlert("Signup failed");
      }
    });
  };
  return (
    <Col xs={10}>
      <Form className="border border-5 p-5" onSubmit={handleSubmit}>
        <Form.Label className="fw-bold fs-3 text-decoration-underline mb-4">
          SIGNUP
        </Form.Label>
        <Form.Group controlId="formUsername">
          <Form.Label className="fs-4">Username</Form.Label>
          <Form.Control
            className="bg-primary mb-3"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength={3}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label className="fs-4">Password</Form.Label>
          <Form.Control
            className="bg-primary mb-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={5}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label className="fs-4">Email</Form.Label>
          <Form.Control
            className="bg-primary mb-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBirthday">
          <Form.Label className="fs-4">Birthday</Form.Label>
          <Form.Control
            className="bg-primary mb-3"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="bg-secondary" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};
