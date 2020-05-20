import React from "react";

const Card = ({ src: image, description }) => {
  return (
    <div className="card">
      <div className="card-wrapper">
        <span>
          <img src={image} alt="" className="card-logo" />
        </span>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-social">like on fb</div>
    </div>
  );
};

export default Card;
