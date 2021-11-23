import React from "react";
import MovieList from "../movieList/MovieList";
import request from "../../requests/request";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <>
      <Banner fetchUrl={request.fetchTopRated} />
      <MovieList
        title="New on Disney+"
        fetchUrl={request.fetchDisneyOriginals}
      />
      <MovieList title="Top Rated" fetchUrl={request.fetchTopRated} />
      <MovieList title="Trending now" fetchUrl={request.fetchTrending} />
      <MovieList title="Shows" fetchUrl={request.fetchDisneyShows} />
      <MovieList title="Pixar" fetchUrl={request.fetchPixar} />
      <MovieList title="Star shows" fetchUrl={request.fetchStarShows} />
      <MovieList title="Star Wars" fetchUrl={request.fetchStarWars} />
      <MovieList title="Marvel Universe" fetchUrl={request.fetchMarvel} />
      <MovieList title="Animation" fetchUrl={request.fetchAnimation} />
      <MovieList title="Nat Geo Shows" fetchUrl={request.fetchNatGeo} />
    </>
  );
};

export default Home;
