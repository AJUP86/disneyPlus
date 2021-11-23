import { useEffect, useState } from "react";

const useBannerFetch = (url) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const getFetch = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/${url}`);
      const { results } = await response.json();
      setMovie(results[Math.floor(Math.random() * results.length - 1)]);
      return response;
    };
    getFetch();
  }, []);
  return [movie];
};

export default useBannerFetch;
