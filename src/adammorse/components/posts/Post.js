import React from "react";
import PropTypes from "prop-types";

const Post = ({ text }) => (
  <div>
    <a href="https://example.com" className="post">
      {text}
    </a>
  </div>
);

Post.propTypes = {
  text: PropTypes.string.isRequired
};

export default Post;
