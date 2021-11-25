import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/avatar/Avatar";
import { src } from "../../components/avatar/avatarUrl";
import "../../styles/startPage.css";

const StartPage = () => {
  return (
    <div className="start__page">
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
    </div>
  );
};

export default StartPage;
