import React from "react";

const Banner = ({ author, description }) => (
  <div className="hero-banner">
    <div className="wrapper">
      <p style={{ marginBottom: 0 }}>
        <strong>{author}</strong>
      </p>
      <h1 className="text-large">{description}</h1>
    </div>
  </div>
);

export default Banner;
