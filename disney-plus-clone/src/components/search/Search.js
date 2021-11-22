import React from "react";
import useSearch from "../../hooks/useSearch";
import poster_Url from "../../requests/baseUrl";
import "../../styles/search.css";

const Search = ({ query }) => {
  const [data, isLoading, handlingSearch, getFetch, search] = useSearch(query);
  return (
    <>
      <div>
        <form className="search__bar" onSubmit={getFetch}>
          <input
            name="search"
            type="text"
            placeholder="Search by movies or series..."
            className="search__value"
            value={search}
            onChange={handlingSearch}
          />
        </form>
      </div>
      <div className="films__list">
        <div className="films__list__posters">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            data.map((movie) => (
              <img
                key={movie.id}
                className="films__list__poster"
                src={`${poster_Url}${movie.poster_path}`}
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

export default Search;
