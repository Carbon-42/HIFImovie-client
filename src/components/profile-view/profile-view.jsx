import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../index.scss";
import { MovieCard } from "../movie-card/movie-card";

export const ProfileView = ({ user, token, favMovies }) => {
  // console.log("user", user);

  const displayBirthday = user.birthday.slice(0, 10);

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
        localStorage.clear(user);
        localStorage.clear(token);
        window.location.assign("/");
        console.log(response);
      } else {
        alert("Update failed");
        console.log("error", error);
      }
    });
  };
  return (
    <div>
      <Row>
        <Card className="bg-primary border border-5 p-4">
          <Card.Title className="fw-bold fs-5 text-decoration-underline mb-4 ms-3">
            USER PROFILE
          </Card.Title>
          <Card.Body className="bg-primary mb-3">
            <Card.Text>Username: {user.username}</Card.Text>
            <Card.Text>Email: {user.email}</Card.Text>
            <Card.Text>Birthday: {displayBirthday}</Card.Text>
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
      <Row className="bg-primary border border-5 p-4">
        <Card.Title className="fw-bold fs-5 text-decoration-underline mb-4">
          FAVORITE MOVIES
        </Card.Title>
        {favMovies.length === 0 ? (
          <Col>You have not choosen any favorite movies.</Col>
        ) : (
          <>
            {favMovies.map((movie) => (
              <Col key={movie.id} className="mb-5" sm={6} md={6} lg={4}>
                <MovieCard key={movie.id} movie={movie} />
              </Col>
            ))}
          </>
        )}
      </Row>
    </div>
  );
};
