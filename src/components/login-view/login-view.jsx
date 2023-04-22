import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "../../index.scss";

export const LoginView = ({ onLoggedIn, setAlert }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    //this prevents the default behavior of the FormData which is to reload the entire page
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    fetch("https://hifi-movie-api.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          localStorage.setItem("favoriteMovies", data.user.favoriteMovies);
          onLoggedIn(data.user, data.token, data.user.favoriteMovies);
        } else {
          setAlert("Username or password are incorrect.");
        }
      })
      .catch((e) => {
        setAlert("Something went wrong");
      });
  };

  return (
    <Col xs={10}>
      <Form className="border border-5 p-5" onSubmit={handleSubmit}>
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
        <Button className="bg-secondary" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};
