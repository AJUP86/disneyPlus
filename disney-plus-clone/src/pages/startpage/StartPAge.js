import React, { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/avatar/Avatar";
import { src } from "../../components/avatar/avatarUrl";
import "../../styles/startPage.css";

const StartPage = () => {
  const [isRender, setIsRender] = useState(false);
  const handleClick = () => {
    setIsRender(true);
  };
  return (
    <div className="start__page">
      <h1>Who's watching?</h1>
      <div className="profile__page">
        <Link to="/home" onClick={handleClick}>
          <Avatar img={src.rob} name="Rob" />
        </Link>
        <Link to="/home" onClick={() => console.log(isRender)}>
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
