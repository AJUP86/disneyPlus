import React from "react";
import Logo from "../logo/Logo";
import { src } from "../avatar/avatarUrl";
import "../../styles/nav.css";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <div className="nav">
      <Link to="/home">
        <Logo className="nav__logo" />
      </Link>
      <ul className={pathname === "/" ? "nav__start" : "nav__list"}>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/films">
          <li>Films</li>
        </Link>

        <Link to="/series">
          <li>Series</li>
        </Link>

        <Link to="/">
          <li>
            <img className="avatar__small" src={src.rob} alt={`avatar`} />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
