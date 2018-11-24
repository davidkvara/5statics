import React from "react";
import Wrapper from "./Wrapper";
import ScTitle from "./SectionTitle";

export default props => {
  return (
    <div className="new-posts">
      <Wrapper>
        <ScTitle>New Posts</ScTitle>
        <ul>
          <li>
            <a href="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </a>
          </li>
          <li>
            <a href="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </a>
          </li>
        </ul>
      </Wrapper>
    </div>
  );
};
