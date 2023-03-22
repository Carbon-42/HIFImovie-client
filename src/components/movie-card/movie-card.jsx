import Proptypes from "prop-types";
import { Accordion, Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100">
      <Accordion>
        <Accordion.Item eventkey="0">
          <Card.Img
            variant="top"
            src={movie.image}
            onClick={() => {
              onMovieClick(movie);
            }}
          />
        </Accordion.Item>
        <Accordion.Header>
          <Card.Title>{movie.title}</Card.Title>
        </Accordion.Header>
        <Accordion.Body>
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
