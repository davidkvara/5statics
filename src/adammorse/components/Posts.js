import React from "react";
import Wrapper from "./Wrapper";
import PostsSection from "./PostsSection";

export default props => (
  <div className="posts">
    <Wrapper>
      <PostsSection title="writing" posts={props.writings} />
      <PostsSection title="reading list" posts={props.readings} />
    </Wrapper>
  </div>
);
