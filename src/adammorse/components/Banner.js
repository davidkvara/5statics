import React from "react";
import PropTypes from "prop-types";

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

Banner.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Banner;
