import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "../../index.scss";

export const ProfileView = ({ user, token }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://hifi-movie-api.onrender.com/users/${user.username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        alert("Profile removed successfully");
        console.log(response);
      } else {
        alert("Update failed");
        console.log("error", error);
      }
    });
  };

  return (
    <Row>
      <Card className="bg-primary border border-5 p-4">
        <Card.Title className="fw-bold fs-5 text-decoration-underline mb-4">
          USER PROFILE
        </Card.Title>
        <Card.Body className="bg-primary mb-3">
          <Card.Text>Username: {user.username}</Card.Text>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Text>Birthday: {user.birthday}</Card.Text>
          <Button
            as={Link}
            to="/updateprofile"
            className="bg-secondary"
            variant="primary"
          >
            Edit Profile
          </Button>
          <br />
          <Button
            className="bg-secondary"
            variant="primary"
            onClick={handleSubmit}
          >
            Delete Profile
          </Button>
        </Card.Body>
      </Card>
    </Row>
  );
};
