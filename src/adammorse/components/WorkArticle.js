import React from "react";

const WorkArticle = ({ media, title, description }) => {
  return (
    <article className="work">
      <div
        className="article-thumb"
        style={{ backgroundImage: `url(${media})` }}
      />
      {/* <img src={media} alt="" /> */}
      <h2 className="article-title">{title}</h2>
      <p className="article-description">{description}</p>
    </article>
  );
};

export default WorkArticle;
