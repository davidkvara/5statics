import React from "react";
import Wrapper from "./Wrapper";
import ScTitle from "./SectionTitle";
import SearchBox from "./SearchBox";

export default props => {
  return (
    <div className="slider">
      <Wrapper>
        <ScTitle>this will be a slider</ScTitle>
        <p>
          Mollitia labore voluptates, perspiciatis illum non maxime incidunt?
        </p>
        <SearchBox />
      </Wrapper>
    </div>
  );
};
