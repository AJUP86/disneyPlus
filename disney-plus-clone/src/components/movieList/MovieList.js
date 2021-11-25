import React, { useContext } from "react";
import poster_Url from "../../requests/baseUrl";
import "../../styles/movieList.css";
import { Link, useLocation } from "react-router-dom";
import { YoutubeContext } from "../../context/YoutubeContext";

const MovieList = ({ title, data }) => {
  const { handleClick } = useContext(YoutubeContext);
  const { pathname } = useLocation();

  return (
    <div
      className={
        pathname === "/films" || pathname === "/series"
          ? "films"
          : "movie__list"
      }
    >
      {title && <h2>{title}</h2>}
      <div
        className={
          pathname === "/films" || pathname === "/series"
            ? "films"
            : "movie__list__posters"
        }
      >
        {data ? (
          data.map((movie) => (
            <Link
              to={`/${movie?.name || movie?.title}`}
              onClick={() => {
                handleClick(movie);
              }}
              key={movie.id}
            >
              <img
                className={
                  pathname === "/films" || pathname === "/series"
                    ? "film"
                    : "movie__list__poster"
                }
                src={`${poster_Url}${movie.backdrop_path}`}
                alt={movie.name || movie.title}
              />
            </Link>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default MovieList;
