import React from "react";
import styled from "@emotion/styled";
import Wrapper from "../Wrapper";
import Article from "./Work";

const WorksSection = ({ works }) => {
  const [featured1, featured2, ...rest] = works;
  const articles = rest.map((work, i) => <Article key={i} {...work} />);

  return (
    <section>
      <Wrapper>
        <h2 style={{ fontSize: ".925rem", textTransform: "uppercase" }}>
          work
        </h2>
        <WorksContainer>{articles}</WorksContainer>

        <FeatWorksContainer>
          <Article {...featured1} />
          <Article {...featured2} />
        </FeatWorksContainer>
      </Wrapper>
    </section>
  );
};

const WorksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 1em;
`;

const FeatWorksContainer = styled.div`
  margin: 2rem 0 4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default WorksSection;
