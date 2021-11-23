import React from "react";
import useFetch from "../../hooks/useFetch";
import poster_Url from "../../requests/baseUrl";

const Series = ({ disneyShow, star, natGeo }) => {
  const [disneyShows, isLoading] = useFetch(disneyShow);
  const [starShow, isLoading2] = useFetch(star);
  const [natGeoShow, isLoading3] = useFetch(natGeo);
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
                className="films__list__poster"
                src={`${poster_Url}${movie?.backdrop_path}`}
                alt={movie.name || movie.title}
              />
            ))
          )}
        </div>
        {/*trailerUrl && <YouTube videoId={trailerUrl} opts={opts} >*/}
      </div>
      <div className="films__list">
        <div className="films__list__posters">
          {isLoading2 ? (
            <h1>Loading...</h1>
          ) : (
            disneyShows.map((movie) => (
              <img
                key={movie.id}
                className="films__list__poster"
                src={`${poster_Url}${movie?.backdrop_path}`}
                alt={movie.name || movie.title}
              />
            ))
          )}
        </div>
        {/*trailerUrl && <YouTube videoId={trailerUrl} opts={opts} >*/}
      </div>
      <div className="films__list">
        <div className="films__list__posters">
          {isLoading3 ? (
            <h1>Loading...</h1>
          ) : (
            starShow.map((movie) => (
              <img
                key={movie.id}
                className="films__list__poster"
                src={`${poster_Url}${movie?.backdrop_path}`}
                alt={movie.name || movie.title}
              />
            ))
          )}
        </div>
        {/*trailerUrl && <YouTube videoId={trailerUrl} opts={opts} >*/}
      </div>
    </>
  );
};

export default Series;
