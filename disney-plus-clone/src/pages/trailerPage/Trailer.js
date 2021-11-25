import React, { useContext } from "react";
import "../../styles/trailer.css";
import Youtube from "react-youtube";
import { YoutubeContext } from "../../context/YoutubeContext";
import { Link } from "react-router-dom";

const Trailer = () => {
  const { trailerUrl, opts } = useContext(YoutubeContext);

  return (
    <div className="trailer__container">
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      <Link to="/home">
        <button>Back to home page</button>
      </Link>
    </div>
  );
};
export default Trailer;
