import React from "react";
import styled from "styled-components";
import ArticleTitle from "./ArticleTitle";
import ArticleDescription from "./ArticleDescription";
import ButtonTirtiary from "./ButtonTirtiary";
import icon from "../images/teacher_icon.svg";

const ExploreCard = props => {
  return (
    <CardWrapper>
      <ExploreIcon src={icon} className="exploreIcon" alt="" />
      <ArticleTitle>Time for Teachers</ArticleTitle>
      <ArticleDescription>
        Optimize your classNameroom with access to teacher-specific tips,
        tricks, strategies &amp; resources.
      </ArticleDescription>
      <ButtonTirtiary>Explore</ButtonTirtiary>
    </CardWrapper>
  );
};

const ExploreIcon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 120px;
  max-height: 120px;
  padding-bottom: 1rem;
`;

const CardWrapper = styled.div`
  text-align: center;
  padding: 2.6rem 1rem;
`;

export default ExploreCard;
