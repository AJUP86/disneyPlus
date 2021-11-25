import React from "react";
import useFetch from "../../hooks/useFetch";
import MovieList from "../../components/movieList/MovieList";

const Series = ({ disneyShow, star, natGeo }) => {
  const [disneyShows] = useFetch(disneyShow);
  const [starShow] = useFetch(star);
  const [natGeoShow] = useFetch(natGeo);

  return (
    <>
      <MovieList data={disneyShows} />
      <MovieList data={starShow} />
      <MovieList data={natGeoShow} />
    </>
  );
};

export default Series;
