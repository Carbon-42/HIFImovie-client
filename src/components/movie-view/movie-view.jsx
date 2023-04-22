import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useParams } from "react-router";
import "./movie-view.scss";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { AlertBox } from "../alert-box/alert-box";

export const MovieView = ({
  movies,
  handleFavMovies,
  handleRemoveMovies,
  setSelectedMovie,
}) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m.id === movieId);
  const [genreName, genreDescription] = movie.genre;
  const [directorName, directorBio] = movie.director;

  useEffect(() => {
    setSelectedMovie(movieId);
  });

  // console.log(selectedMovie);
  const handleAddfavorite = () => {
    handleFavMovies();
  };

  const handleRemovefavorite = () => {
    handleRemoveMovies();
  };

  return (
    <Row className="justify-content-md-center" xs={1} sm={1} md={2}>
      <Col
        className="mb-5"
        xs={{ span: 8, offset: 2 }}
        sm={{ span: 8, offset: 2 }}
        md={{ span: 4, offset: 0 }}
      >
        <div className="img" style={{ border: "10px solid black" }}>
          <img src={movie.image} className="w-100" />
        </div>
      </Col>
      <Col className="mb-5" md={{ offset: 1 }} lg={{ offset: 1 }}>
        <Button
          className="bg-secondary"
          variant="primary"
          onClick={handleAddfavorite}
        >
          Add to Favorites
        </Button>
        <Button
          className="bg-secondary"
          variant="primary"
          onClick={handleRemovefavorite}
        >
          Remove from Favorites
        </Button>
        <div className="mt-3">
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
      </Col>
    </Row>
  );
};
