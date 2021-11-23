import { useState } from "react";

const useSearch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const HandleSearch = (e) => {
    e.preventDefault(setSearch(e.target.value));
  };
  const getFetch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${url}${search}`
      );
      if (response.status > 400) {
        setError(response.message);
        throw new Error(
          `We can't find a movie or show with the name of ${search}`
        );
      } else {
        const data = await response.json();
        setData(data.results);
        setIsLoading(false);
        return data;
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return [data, isLoading, HandleSearch, getFetch, search, error];
};

export default useSearch;
