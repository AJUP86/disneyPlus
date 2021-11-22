import React from "react";
import MovieList from "../movieList/MovieList";
import request from "../../requests/request";

const Home = () => {
  return (
    <>
      <MovieList
        title="New on Disney+"
        fetchUrl={request.fetchDisneyOriginals}
      />
      <MovieList title="Top Rated" fetchUrl={request.fetchTopRated} />
      <MovieList title="Trending now" fetchUrl={request.fetchTrending} />
      <MovieList title="Star Wars" fetchUrl={request.fetchStarWars} />
      <MovieList title="Marvel Universe" fetchUrl={request.fetchMarvel} />
      <MovieList title="Animation" fetchUrl={request.fetchAnimation} />
    </>
  );
};

export default Home;
