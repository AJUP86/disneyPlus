import React from "react";
import useFetch from "../../hooks/useFetch";
import MovieList from "../../components/movieList/MovieList";

const Films = ({ disney, animation, starWars, marvel, trending, topRated }) => {
  const [disneyData] = useFetch(disney);
  const [animationData] = useFetch(animation);
  const [starWarsData] = useFetch(starWars);
  const [marvelData] = useFetch(marvel);
  const [trendingData] = useFetch(trending);
  const [topRatedData] = useFetch(topRated);

  return (
    <>
      <MovieList data={disneyData} />
      <MovieList data={animationData} />
      <MovieList data={starWarsData} />
      <MovieList data={marvelData} />
      <MovieList data={trendingData} />
      <MovieList data={topRatedData} />
    </>
  );
};

export default Films;
