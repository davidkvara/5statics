import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import Wrapper from "../Wrapper";

const PostsSection = ({ title, list }) => {
  const titleID = title.split(" ")[0];
  const postList = list.map((post, i) => <Post key={i} text={post} />);
  return (
    <div className="posts">
      <Wrapper>
        <h2 id={titleID} className="posts-section-title">
          {title}
        </h2>
        <div className="posts-list">{postList}</div>
      </Wrapper>
    </div>
  );
};

PostsSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
};

export default PostsSection;
