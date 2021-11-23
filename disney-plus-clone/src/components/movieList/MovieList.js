import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import poster_Url from "../../requests/baseUrl";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import "../../styles/movieList.css";

const MovieList = ({ title, fetchUrl }) => {
  const [data, isLoading] = useFetch(fetchUrl);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

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
              onClick={() => {
                handleClick(movie);
              }}
              className="movie__list__poster"
              src={`${poster_Url}${movie.backdrop_path}`}
              alt={movie.name || movie.title}
            />
          ))
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default MovieList;
