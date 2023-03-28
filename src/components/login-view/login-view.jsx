import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../index.scss";

export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    //this prevents the default behavior of the FormData which is to reload the entire page
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch("https://hifi-movie-api.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data.user);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("Username or password are incorrect.");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <Form className="border border-5 p-3" onSubmit={handleSubmit}>
      <Form.Label className="fw-bold fs-5 text-decoration-underline mb-4">
        LOGIN
      </Form.Label>
      <Form.Group controlId="formUsername">
        <Form.Label className="fw-medium">Username</Form.Label>
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
        <Form.Label className="fw-medium">Password</Form.Label>
        <Form.Control
          className="bg-primary mb-3"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
