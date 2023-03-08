export const MovieView = ({ movie, onBackClick }) => {
  const [genreName, genreDescription] = movie.genre;
  const [directorName, directorBio] = movie.director;
  return (
    <div>
      <div>
        <img src={movie.image} />
      </div>
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
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
