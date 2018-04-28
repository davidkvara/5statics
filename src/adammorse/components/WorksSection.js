import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "./SectionTitle";
import WorkArticle from "./WorkArticle";

const WorksSection = ({ works }) => {
  const [a, b, ...rest] = works;

  return (
    <section className="featured-work">
      <Wrapper>
        <SectionTitle>work</SectionTitle>
        {/* აქ ეს ორი სექცია არ მომწონს, მაგრამ ამ ეტაპზე ვტოვებ (გასაერთიანებელია) */}
        <div className="works">
          {rest.map((work, i) => <WorkArticle key={i} {...work} />)}
        </div>
        <div className="works-2">
          <WorkArticle {...a} />
          <WorkArticle {...b} />
        </div>
      </Wrapper>
    </section>
  );
};

export default WorksSection;
