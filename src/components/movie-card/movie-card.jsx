import Proptypes from "prop-types";
import { Accordion, Button, Card } from "react-bootstrap";
import "./movie-card.scss";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100 bg-secondary border border-3">
      <Accordion className="h-100 bg-secondary">
        <Card.Img
          className="card-img"
          variant="top"
          src={movie.image}
          onClick={() => {
            onMovieClick(movie);
          }}
        />
        <Accordion.Header className="">
          <Card.Title>{movie.title}</Card.Title>
        </Accordion.Header>
        <Accordion.Body className="p-1">
          <Card.Body>
            <Card.Text>{movie.description}</Card.Text>
            <Button
              onClick={() => {
                onMovieClick(movie);
              }}
              variant="link"
            >
              Open
            </Button>
          </Card.Body>
        </Accordion.Body>
      </Accordion>
    </Card>
  );
};

//Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string.isRequired,
  }).isRequired,
  onMovieClick: Proptypes.func.isRequired,
};
