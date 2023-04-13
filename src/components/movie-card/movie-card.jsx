import Proptypes from "prop-types";
import { Accordion, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100 bg-primary">
      <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
        <Card.Img className="card-img" variant="top" src={movie.image} />
      </Link>
    </Card>
  );
};

//Here is where we define all the props constraints for the MovieCard
MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string.isRequired,
  }).isRequired,
};
