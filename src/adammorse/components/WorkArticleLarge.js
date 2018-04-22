import React from "react";

const WorkArticleLarge = ({ media, title, description }) => (
  <div className="article-large">
    <div className="thumbnail" style={{ backgroundImage: `url(${media})` }} />

    <h2 className="article-title">{title}</h2>
    <p className="article-description">{description}</p>
  </div>
);

export default WorkArticleLarge;
