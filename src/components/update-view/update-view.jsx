import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../index.scss";

export const UpdateView = ({ user, token, setUser, setAlert }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const updateUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
      email: email,
      birthday: birthday,
    };
    console.log(data);

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
        setAlert("Update successful!");
        updateUser(data);
        const user = JSON.parse(result);
        localStorage.setItem("favoriteMovies", user.favoriteMovies);
      })
      .catch((error) => {
        setAlert("Update failed");
        window.location.reload();
        console.log("error", error);
      });
  };
  return (
    <Row>
      <Form className="border border-5 p-3" onSubmit={handleSubmit}>
        <Form.Label className="fw-bold fs-5 text-decoration-underline mb-2">
          UPDATE PROFILE
        </Form.Label>
        <br />
        <Form.Text>Please complete all fields.</Form.Text>
        <Form.Group className="mt-4" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="mb-4"
            type="text"
            value={username}
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
            minLength={3}
            required
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="mb-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={5}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="mb-4"
            type="email"
            value={email}
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formBirthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            className="bg-primary mb-4"
            type="date"
            value={birthday}
            placeholder={user.birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="bg-secondary" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Row>
  );
};
