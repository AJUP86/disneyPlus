import React from "react";
import useFetch from "../../hooks/useFetch";
import poster_Url from "../../requests/baseUrl";
import "../../styles/movieList.css";

const MovieList = ({ title, fetchUrl }) => {
  const [data, isLoading] = useFetch(fetchUrl);
  return (
    <div className="movie__list">
      <h2>{title}</h2>
      <div className="movie__list__posters">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data.map((movie) => (
            <img
              key={movie.id}
              className="movie__list__poster"
              src={`${poster_Url}${movie.poster_path}`}
              alt={movie.name || movie.title}
            />
          ))
        )}
      </div>
      {/*trailerUrl && <YouTube videoId={trailerUrl} opts={opts} >*/}
    </div>
  );
};

export default MovieList;
