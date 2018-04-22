import React from "react";
import SectionTitle from "./SectionTitle";
import Post from "./Post";

const PostsSection = ({ title, posts }) => {
  return (
    <div className="section">
      {/* id გასაპარსია */}
      <SectionTitle id="writing">{title}</SectionTitle>
      <div className="data-list">
        {posts.map((post, i) => <Post key={i} text={post} />)}
      </div>
    </div>
  );
};

export default PostsSection;
