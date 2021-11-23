import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import poster_Url from "../../requests/baseUrl";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const Series = ({ disneyShow, star, natGeo }) => {
  const [disneyShows, isLoading] = useFetch(disneyShow);
  const [starShow, isLoading2] = useFetch(star);
  const [natGeoShow, isLoading3] = useFetch(natGeo);
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
    <>
      <div className="films__list">
        <div className="films__list__posters">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            natGeoShow.map((movie) => (
              <img
                key={movie.id}
                onClick={() => {
                  handleClick(movie);
                }}
                className="films__list__poster"
                src={`${poster_Url}${movie?.backdrop_path}`}
                alt={movie.name || movie.title}
              />
            ))
          )}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
      <div className="films__list">
        <div className="films__list__posters">
          {isLoading2 ? (
            <h1>Loading...</h1>
          ) : (
            disneyShows.map((movie) => (
              <img
                key={movie.id}
                onClick={() => {
                  handleClick(movie);
                }}
                className="films__list__poster"
                src={`${poster_Url}${movie?.backdrop_path}`}
                alt={movie.name || movie.title}
              />
            ))
          )}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
      <div className="films__list">
        <div className="films__list__posters">
          {isLoading3 ? (
            <h1>Loading...</h1>
          ) : (
            starShow.map((movie) => (
              <img
                key={movie.id}
                onClick={() => {
                  handleClick(movie);
                }}
                className="films__list__poster"
                src={`${poster_Url}${movie?.backdrop_path}`}
                alt={movie.name || movie.title}
              />
            ))
          )}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
};

export default Series;
