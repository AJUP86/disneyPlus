import React from "react";
import useBannerFetch from "../../hooks/useBannerFetch";
import "../../styles/banner.css";

const Banner = ({ fetchUrl }) => {
  const [movie] = useBannerFetch(fetchUrl);
  return (
    <div className="container">
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title ||
              movie?.name ||
              movie?.original_name ||
              movie?.original_title}
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Banner;
