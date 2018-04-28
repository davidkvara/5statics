import React from "react";
import PropTypes from "prop-types";

const WorkArticle = ({ media, title, description }) => {
  return (
    <article className="work">
      <div className="thumbnail" style={{ backgroundImage: `url(${media})` }} />
      <h2 className="article-title">{title}</h2>
      <p className="article-description">{description}</p>
    </article>
  );
};

WorkArticle.propTypes = {
  media: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default WorkArticle;
