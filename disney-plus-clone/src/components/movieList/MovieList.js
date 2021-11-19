import React, { useEffect, useState } from "react";
import "../../styles/movieList.css";
const poster_Url = "https://image.tmdb.org/t/p/w500/";

const MovieList = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getFetch = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/${fetchUrl}`);
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);

      return data;
    };
    getFetch();
  }, [fetchUrl]);
  return (
    <div className="movie__list">
      <h2>{title}</h2>
      <div className="movie__list__posters">
        {movies &&
          movies.map((movie) => (
            <img
              key={movie.id}
              className="movie__list__poster"
              src={`${poster_Url}${movie.poster_path}`}
              alt={movie.name || movie.title}
            />
          ))}
      </div>
      {/*trailerUrl && <YouTube videoId={trailerUrl} opts={opts} >*/}
    </div>
  );
};

export default MovieList;
