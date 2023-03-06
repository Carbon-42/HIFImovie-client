import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      Genre: [
        {
          Name: "Comedy",
          Description:
            "A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through amusement. Films in this style traditionally have a happy ending. Comedy is one of the oldest genres in film—and derived from the classical comedy in theatre. Some of the earliest silent films were comedies, as slapstick comedy often relies on visual depictions, without requiring sound. When sound films became more prevalent during the 1920s, comedy films grew in popularity, as laughter could result from burlesque situations but now also dialogue.",
        },
      ],
      Director: [
        {
          Name: "Stephen Frears",
          Bio: "Stephen Arthur Frears is an English director and producer of film and television often depicting real life stories as well as projects that explore social class through sharply drawn characters.",
        },
      ],
      Actors: [],
      _id: "63e95cae143e89a078994f5c",
      Title: "High Fidelity",
      Description: "Three losers hang out in a record store and harass people.",
      Image: "https://en.wikipedia.org/wiki/File:High_Fidelity_poster.jpg",
    },
    {
      Genre: [
        {
          Name: "Action",
          Description:
            "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.",
        },
      ],
      Director: [
        {
          Name: "Quentin Tarantino",
          Bio: "Quentin Jerome Tarantino is an American film director, writer, producer, and actor. His films are characterized by frequent references to popular culture and film genres, non-linear storylines, dark humor, stylized violence, extended dialogue, pervasive use of profanity, cameos and ensemble casts.",
          Birth: "1963",
        },
      ],
      Actors: [],
      _id: "63e96864143e89a078994f63",
      Title: "Reservoir Dogs",
      Description:
        "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      Image: "https://en.wikipedia.org/wiki/File:Reservoir_Dogs.png",
    },
    {
      Genre: [
        {
          Name: "Comedy",
          Description:
            "A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through amusement. Films in this style traditionally have a happy ending. Comedy is one of the oldest genres in film—and derived from the classical comedy in theatre. Some of the earliest silent films were comedies, as slapstick comedy often relies on visual depictions, without requiring sound. When sound films became more prevalent during the 1920s, comedy films grew in popularity, as laughter could result from burlesque situations but now also dialogue.",
        },
      ],
      Director: [
        {
          Name: "Wes Anderson",
          Bio: "Born on a desert island with Box Trolls",
          Birth: "1969",
        },
      ],
      Actors: [],
      _id: "63e9633c143e89a078994f5e",
      Title: "The Life Aquatic with Steve Zissou",
      Description:
        "With a plan to exact revenge on a mythical shark that killed his partner, Oceanographer Steve Zissou (Bill Murray) rallies a crew that includes his estranged wife, a journalist, and a man who may or may not be his son.",
      Image: "https://en.wikipedia.org/wiki/File:Lifeaquaticposter.jpg",
    },
    {
      Genre: [
        {
          Name: "Action",
          Description:
            "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats.",
        },
      ],
      Director: [
        {
          Name: "Quentin Tarantino",
          Bio: "Quentin Jerome Tarantino is an American film director, writer, producer, and actor. His films are characterized by frequent references to popular culture and film genres, non-linear storylines, dark humor, stylized violence, extended dialogue, pervasive use of profanity, cameos and ensemble casts.",
          Birth: "1963",
        },
      ],
      Actors: [],
      _id: "63e96994143e89a078994f65",
      Title: "Pulp Fiction",
      Description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      Image:
        "https://en.wikipedia.org/wiki/File:Pulp_Fiction_(1994)_poster.jpg",
    },
    {
      Genre: [
        {
          Name: "Comedy",
          Description:
            "A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through amusement. Films in this style traditionally have a happy ending. Comedy is one of the oldest genres in film—and derived from the classical comedy in theatre. Some of the earliest silent films were comedies, as slapstick comedy often relies on visual depictions, without requiring sound. When sound films became more prevalent during the 1920s, comedy films grew in popularity, as laughter could result from burlesque situations but now also dialogue.",
        },
      ],
      Director: [
        {
          Name: "Wes Anderson",
          Bio: "Born on a desert island with Box Trolls",
          Birth: "1969",
        },
      ],
      Actors: [],
      _id: "63e988c8143e89a078994f6f",
      Title: "The Grand Budapest Hotel",
      Description:
        "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel''s glorious years under an exceptional concierge.",
      Image: "https://en.wikipedia.org/wiki/File:The_Grand_Budapest_Hotel.png",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
