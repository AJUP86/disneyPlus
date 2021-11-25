import React from "react";
import MovieList from "../../components/movieList/MovieList";
import Banner from "../../components/banner/Banner";
import { listNames } from "../../requests/request";
import useFetch from "../../hooks/useFetch";

const Home = ({
  banner,
  disney,
  animation,
  starWars,
  marvel,
  trending,
  topRated,
  shows,
  pixar,
  natGeo,
  starShows,
}) => {
  const [disneyData] = useFetch(disney);
  const [animationData] = useFetch(animation);
  const [starWarsData] = useFetch(starWars);
  const [marvelData] = useFetch(marvel);
  const [trendingData] = useFetch(trending);
  const [topRatedData] = useFetch(topRated);
  const [showsData] = useFetch(shows);
  const [pixarData] = useFetch(pixar);
  const [natGeoData] = useFetch(natGeo);
  const [starShowsData] = useFetch(starShows);
  return (
    <>
      <Banner fetchUrl={banner} />
      <MovieList title={listNames.disney} data={disneyData} />
      <MovieList title={listNames.topRated} data={topRatedData} />
      <MovieList title={listNames.trendingNow} data={trendingData} />
      <MovieList title={listNames.shows} data={showsData} />
      <MovieList title={listNames.pixar} data={pixarData} />
      <MovieList title={listNames.starShows} data={starShowsData} />
      <MovieList title={listNames.starWars} data={starWarsData} />
      <MovieList title={listNames.marvel} data={marvelData} />
      <MovieList title={listNames.animation} data={animationData} />
      <MovieList title={listNames.natGeo} data={natGeoData} />
    </>
  );
};

export default Home;
