import React from "react";
import Avatar from "../avatar/Avatar";
import Logo from "../logo/Logo";
import { src } from "../avatar/avatarUrl";
import "../../styles/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Logo className="nav__logo" />
      <ul className="nav__list">
        <li>Home</li>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <li>Films</li>
        <li>Series</li>
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
