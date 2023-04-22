import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import { UpdateView } from "../update-view/update-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { AlertBox } from "../alert-box/alert-box";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { Modal } from "react-bootstrap";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState(
    localStorage.getItem("favoriteMovies")
  );
  const [viewMovies, setViewMovies] = useState([]);
  const [alert, setAlert] = useState("");
  const [modalShow, setModalShow] = useState(false);

  //filter favorite movies
  const favMovies = movies.filter((movie) => favoriteMovies.includes(movie.id));

  //add favorite movies
  const handleFavMovies = () => {
    const data = {
      selectedMovie: selectedMovie,
    };

    fetch(
      `https://hifi-movie-api.onrender.com/users/${user.username}/movies/${selectedMovie}`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setAlert("Added to Favorites!");
        setFavoriteMovies(result.favoriteMovies);
        console.log("user", result);
        console.log("result", result.favoriteMovies);
      })
      .catch((error) => {
        setAlert("Update failed");
        console.log("error", error);
      });
  };

  //remove favorite movies
  const handleRemoveMovies = () => {
    const data = {
      selectedMovie: selectedMovie,
    };

    fetch(
      `https://hifi-movie-api.onrender.com/users/${user.username}/movies/${selectedMovie}`,
      {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        setAlert("Removed from Favorites!");
        setFavoriteMovies(result.favoriteMovies);
        console.log("user", result);
        console.log("result", result.favoriteMovies);
      })
      .catch((error) => {
        setAlert("Update failed");
        console.log("error", error);
      });
  };

  //fetch movies from database
  useEffect(() => {
    if (!token) return;

    fetch("https://hifi-movie-api.onrender.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          return {
            id: movie._id,
            image: movie.image,
            title: movie.title,
            description: movie.description,
            genre: [movie.genre.name, movie.genre.description],
            director: [movie.director.name, movie.director.bio],
          };
        });
        setMovies(moviesFromApi);
      });
  }, [token]);

  useEffect(() => {
    setViewMovies(movies);
  }, [movies]);

  //view rendered conditions
  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }}
        onSearch={(query) => {
          setViewMovies(
            movies.filter((movie) =>
              movie.title.toLowerCase().includes(query.toLowerCase())
            )
          );
        }}
      />
      <AlertBox
        alert={alert}
        setAlert={setAlert}
        show={modalShow}
        setModalShow={setModalShow}
        modalShow={modalShow}
      />
      <Row className="justify-content-center" md={2}>
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <SignupView setAlert={setAlert} />
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <LoginView
                    onLoggedIn={(user, token) => {
                      setUser(user);
                      setToken(token);
                      setFavoriteMovies(user.favoriteMovies);
                    }}
                    setAlert={setAlert}
                  />
                )}
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <ProfileView
                    user={user}
                    token={token}
                    setUser={setUser}
                    movies={movies}
                    favMovies={favMovies}
                    setAlert={setAlert}
                  />
                )}
              </>
            }
          />
          <Route
            path="/updateprofile"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <UpdateView
                    user={user}
                    token={token}
                    setUser={setUser}
                    setAlert={setAlert}
                  />
                )}
              </>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>The list is empty</Col>
                ) : (
                  <Col>
                    <MovieView
                      movies={movies}
                      handleFavMovies={handleFavMovies}
                      handleRemoveMovies={handleRemoveMovies}
                      user={user}
                      setSelectedMovie={setSelectedMovie}
                      selectedMovie={selectedMovie}
                    />
                  </Col>
                )}
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col>Loading movies ...</Col>
                ) : (
                  <>
                    {viewMovies.map((movie) => (
                      <Col
                        className="mb-5"
                        key={movie.id}
                        xs={10}
                        md={4}
                        lg={3}
                      >
                        <MovieCard
                          key={movie.id}
                          movie={movie}
                          handleFavMovies={handleFavMovies}
                        />
                      </Col>
                    ))}
                  </>
                )}
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
