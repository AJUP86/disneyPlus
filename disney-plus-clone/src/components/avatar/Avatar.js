import React from "react";
import "../../styles/avatar.css";

const Avatar = ({ img, name }) => {
  return (
    <span>
      <img src={img} alt={`avatar${name}}`} />
      <p>{name}</p>
    </span>
  );
};

export default Avatar;
