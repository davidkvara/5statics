import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import Wrapper from "./Wrapper";

const PostsSection = ({ title, list }) => {
  const titleID = title.split(" ");
  const postList = list.map((post, i) => <Post key={i} text={post} />);
  return (
    <div className="posts">
      <Wrapper>
        <div className="section">
          <h2 id={titleID[0]} className="sec-title">
            {title}
          </h2>
          <div className="data-list">{postList}</div>
        </div>
      </Wrapper>
    </div>
  );
};

PostsSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default PostsSection;
