import React, { useState, createContext } from "react";
import movieTrailer from "movie-trailer";
import { useLocation } from "react-router";
export const YoutubeContext = createContext();

const YoutubeProvider = ({ children }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "690",
    width: "100%",
    playerVars: { autoplay: 1 },
  };
  const handleClick = (movie) => {
    movieTrailer(movie?.name || movie?.title)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
  };
  const values = {
    trailerUrl,
    setTrailerUrl,
    opts,
    handleClick,
  };
  return (
    <YoutubeContext.Provider value={values}>{children}</YoutubeContext.Provider>
  );
};

export default YoutubeProvider;
