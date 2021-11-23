import React from "react";
import useFetch from "../../hooks/useFetch";
import poster_Url from "../../requests/baseUrl";
import "../../styles/films.css";

const Films = ({ disney, animation, starWars, marvel, trending, topRated }) => {
  const [disneyData, isLoading] = useFetch(disney);
  const [animationData, isLoading2] = useFetch(animation);
  const [starWarsData, isLoading3] = useFetch(starWars);
  const [marvelData, isLoading4] = useFetch(marvel);
  const [trendingData, isLoading5] = useFetch(trending);
  const [topRatedData, isLoading6] = useFetch(topRated);
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
            animationData.map((movie) => (
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
            starWarsData.map((movie) => (
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
          {isLoading4 ? (
            <h1>Loading...</h1>
          ) : (
            marvelData.map((movie) => (
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
          {isLoading5 ? (
            <h1>Loading...</h1>
          ) : (
            trendingData.map((movie) => (
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
          {isLoading6 ? (
            <h1>Loading...</h1>
          ) : (
            topRatedData.map((movie) => (
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

export default Films;
