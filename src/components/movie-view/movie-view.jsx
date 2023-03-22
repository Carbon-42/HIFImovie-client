import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./movie-view.scss";

export const MovieView = ({ movie, onBackClick }) => {
  const [genreName, genreDescription] = movie.genre;
  const [directorName, directorBio] = movie.director;
  return (
    <Row className="justify-content-md-center" sm={1} md={2}>
      <Col>
        <div>
          <img src={movie.image} className="w-100" />
        </div>
      </Col>
      <Col>
        <div>
          <span>Title: </span>
          <span>{movie.title}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{movie.description}</span>
        </div>
        <br></br>
        <div>
          <span>Genre </span>
          <br></br>
          <span> Name: {genreName}</span>
          <br></br>
          <span>Description: {genreDescription}</span>
        </div>
        <br></br>
        <div>
          <span>Director </span>
          <br></br>
          <span>Name: {directorName}</span>
          <br></br>
          <span>Bio: {directorBio}</span>
        </div>
        <br></br>
        <button
          onClick={onBackClick}
          className="back-button"
          style={{ cursor: "pointer" }}
        >
          Back
        </button>
      </Col>
    </Row>
  );
};
