import React from "react";
import PropTypes from "prop-types";

const Post = ({ text }) => (
  <a href="https://example.com" className="post">
    <h3>{text}</h3>
  </a>
);

Post.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Post;
