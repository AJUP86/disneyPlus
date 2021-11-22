import { useState, useEffect } from "react";

const useSearch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const HandleSearch = (e) => {
    e.preventDefault(setSearch(e.target.value));
    console.log(search);
  };
  const getFetch = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.themoviedb.org/3/${url}${search}`
    );
    const data = await response.json();
    console.log(data);
    setData(data.results);
    setIsLoading(false);
    return data;
  };

  return [data, isLoading, HandleSearch, getFetch, search];
};

export default useSearch;
