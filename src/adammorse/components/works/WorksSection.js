import React from "react";
import Wrapper from "../Wrapper";
import Article from "./Work";

const WorksSection = ({ works }) => {
  const [featured1, featured2, ...rest] = works;
  const articles = rest.map((work, i) => <Article key={i} {...work} />);

  return (
    <section>
      <Wrapper>
        <h2 className="sec-title">work</h2>
        <div className="works">{articles}</div>

        <div className="featured-work">
          <Article {...featured1} />
          <Article {...featured2} />
        </div>
      </Wrapper>
    </section>
  );
};

export default WorksSection;
