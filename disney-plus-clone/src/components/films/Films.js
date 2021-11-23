import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import poster_Url from "../../requests/baseUrl";
import "../../styles/films.css";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const Films = ({ disney, animation, starWars, marvel, trending, topRated }) => {
  const [disneyData, isLoading] = useFetch(disney);
  const [animationData, isLoading2] = useFetch(animation);
  const [starWarsData, isLoading3] = useFetch(starWars);
  const [marvelData, isLoading4] = useFetch(marvel);
  const [trendingData, isLoading5] = useFetch(trending);
  const [topRatedData, isLoading6] = useFetch(topRated);
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
            disneyData.map((movie) => (
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
            animationData.map((movie) => (
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
            starWarsData.map((movie) => (
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
          {isLoading4 ? (
            <h1>Loading...</h1>
          ) : (
            marvelData.map((movie) => (
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
          {isLoading5 ? (
            <h1>Loading...</h1>
          ) : (
            trendingData.map((movie) => (
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
          {isLoading6 ? (
            <h1>Loading...</h1>
          ) : (
            topRatedData.map((movie) => (
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

export default Films;
