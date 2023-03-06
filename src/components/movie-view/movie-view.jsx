export const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <div>
        <img src={movie.Image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <br></br>
      <div>
        <span>Genre </span>
        <br></br>
        <span> Name: {movie.Genre.map((Genre) => Genre.Name)}</span>
        <br></br>
        <span>
          Description: {movie.Genre.map((Genre) => Genre.Description)}
        </span>
      </div>
      <br></br>
      <div>
        <span>Director </span>
        <br></br>
        <span>Name: {movie.Director.map((Director) => Director.Name)}</span>
        <br></br>
        <span>Bio: {movie.Director.map((Director) => Director.Bio)}</span>
      </div>
      <br></br>
      <div>
        <span>Actors: </span>
        <span>{movie.Actors}</span>
      </div>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
