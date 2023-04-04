import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "../../index.scss";

export const ProfileView = ({ user, token, updateUser }) => {
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

    fetch(`https://hifi-movie-api.onrender.com/users/${username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((result) => {
        alert("Update successful");
        updateUser(data);
        // window.location.reload();
        console.log(result);
      })
      .catch((error) => {
        alert("Update failed");
        console.log("error", error);
      });
  };
  return (
    <div>
      <Row>
        <Card>
          <Card.Title>USER PROFILE</Card.Title>
          <Card.Body>
            <Card.Text>Username: {user.username}</Card.Text>
            <Card.Text>Email: {user.email}</Card.Text>
            <Card.Text>Birthday: {user.birthday}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row></Row>
      <Form className="border border-5 p-3" onSubmit={handleSubmit}>
        <Form.Label className="fw-bold fs-5 text-decoration-underline mb-4">
          SIGNUP
        </Form.Label>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="bg-primary mb-3"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength={3}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="bg-primary mb-3"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={5}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="bg-primary mb-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBirthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            className="bg-primary mb-3"
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>
        <Button className="bg-secondary" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
