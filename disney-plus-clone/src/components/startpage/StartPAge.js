import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { src } from "../avatar/avatarUrl";
import "../../styles/startPage.css";

const StartPage = () => {
  return (
    <>
      <>
        <img
          className="logo"
          src="https://seeklogo.com/images/D/disney-logo-575AED0F1D-seeklogo.com.png"
          alt="Disney Plus Logo Png Clipart@pikpng.com"
        ></img>
      </>
      <h1>Who's watching?</h1>
      <div className="profile__page">
        <Link to="/home">
          <Avatar img={src.rob} name="Rob" />
        </Link>
        <Link to="/home">
          <Avatar img={src.nick} name="Nick" />
        </Link>
        <Link to="/home">
          <Avatar img={src.wouter} name="Wouter" />
        </Link>
        <Link to="/home">
          <Avatar img={src.chriss} name="Chriss" />
        </Link>
        <Link to="/home">
          <Avatar img={src.hyf} name="HYF" />
        </Link>
      </div>
    </>
  );
};

export default StartPage;
