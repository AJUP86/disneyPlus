import React from "react";
import useSearch from "../../hooks/useSearch";
import "../../styles/search.css";
import MovieList from "../../components/movieList/MovieList";
import SearchForm from "../../components/searchForm/SearchForm";

const Search = ({ query }) => {
  const [data, isLoading, handlingSearch, getFetch, search, error] =
    useSearch(query);

  return (
    <>
      <SearchForm
        isLoading={isLoading}
        handlingSearch={handlingSearch}
        getFetch={getFetch}
        search={search}
        error={error}
      />
      <MovieList data={data} />
    </>
  );
};

export default Search;
