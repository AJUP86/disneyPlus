import React from "react";
import "../../styles/search.css";

const Searchform = ({ isLoading, handlingSearch, getFetch, search, error }) => {
  return (
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
        {isLoading && <h1>What do you want to watch?</h1>}
      </form>
    </div>
  );
};

export default Searchform;
