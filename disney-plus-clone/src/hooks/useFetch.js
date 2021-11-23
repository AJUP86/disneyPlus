import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getFetch = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/${url}`);
      const data = await response.json();
      setData(data.results);
      setIsLoading(false);
      return data;
    };
    getFetch();
  }, []);
  return [data, isLoading];
};

export default useFetch;
