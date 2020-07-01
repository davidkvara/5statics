import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";
import Wrapper from "../Wrapper";

const PostsSection = ({ title, list }) => {
  const titleID = title.split(" ")[0];
  const postList = list.map((post, i) => <Post key={i} text={post} />);
  return (
    <div style={{ marginBottom: "6rem" }}>
      <Wrapper>
        <h2
          id={titleID}
          style={{ fontSize: "0.925rem", textTransform: "uppercase" }}
        >
          {title}
        </h2>
        <div>{postList}</div>
      </Wrapper>
    </div>
  );
};

PostsSection.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
};

export default PostsSection;
