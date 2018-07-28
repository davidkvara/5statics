import React from "react";

const Card = ({ mediaSrc, description }) => {
  return (
    <div className="card">
      <div className="wrapper">
        <span>
          <img src={mediaSrc} alt="" className="pic" />
        </span>
        <p className="description">{description}</p>
      </div>
      <div className="connect">like on fb</div>
    </div>
  );
};

export default Card;
