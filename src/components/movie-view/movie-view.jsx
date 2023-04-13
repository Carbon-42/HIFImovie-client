import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./movie-view.scss";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

export const MovieView = ({
  movies,
  handleFavMovies,
  setSelectedMovie,
  selectedMovie,
}) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);
  const [genreName, genreDescription] = movie.genre;
  const [directorName, directorBio] = movie.director;

  useEffect(() => {
    setSelectedMovie(movieId);
  });

  console.log(selectedMovie);
  const handleClick = () => {
    // event.preventDefault();
    // setSelectedMovie(movieId);
    handleFavMovies();
  };

  return (
    <Row className="justify-content-md-center" xs={1} sm={1} md={2}>
      <Col>
        <div className="img" style={{ border: "10px solid black" }}>
          <img src={movie.image} className="w-100" />
        </div>
        <Button
          className="bg-secondary"
          variant="primary"
          onClick={handleClick}
        >
          Add to Favorites
        </Button>
      </Col>
      <Col>
        <div>
          <span className="fw-bold fs-3 text-decoration-underline">Movie</span>
          <br></br>
          <span className="fw-bold fs-5">Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span className="fw-bold fs-5">Description: </span>
          <span>{movie.description}</span>
        </div>
        <br></br>
        <div>
          <span className="fw-bold fs-3 text-decoration-underline">Genre</span>
          <br></br>
          <span className="fw-bold fs-5"> Name: </span>
          <span>{genreName}</span>
          <br></br>
          <span className="fw-bold fs-5">Description: </span>
          <span>{genreDescription}</span>
        </div>
        <br></br>
        <div>
          <span className="fw-bold fs-3 text-decoration-underline">
            Director{" "}
          </span>
          <br></br>
          <span className="fw-bold fs-5">Name: </span>
          <span>{directorName}</span>
          <br></br>
          <span className="fw-bold fs-5">Bio: </span>
          <span>{directorBio}</span>
        </div>
        <br></br>
        <Link to="/">
          <button className="back-button" style={{ cursor: "pointer" }}>
            Back
          </button>
        </Link>
      </Col>
    </Row>
  );
};
