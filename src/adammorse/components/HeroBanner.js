import React from "react";
import PropTypes from "prop-types";

const Banner = ({ author, description }) => (
  <div className="hero-banner">
    <div className="wrapper">
      <h1 style={{ marginBottom: 0, color: "#363634", fontSize: "1rem" }}>
        {author}
      </h1>
      <h2 style={{ fontSize: "2rem" }}>{description}</h2>
    </div>
  </div>
);

Banner.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Banner;
