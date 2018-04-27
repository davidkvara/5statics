import React from "react";
import ArticleTitle from "./ArticleTitle";
import ArticleDescription from "./ArticleDescription";
import styled from "styled-components";
import icon from "../images/feature-integrated.gif";

const FeaturedCard = props => {
  return (
    <Card>
      <FeaturedIcon src={icon} className="featuredImg" alt="" />
      <ArticleTitle>One system to do it all</ArticleTitle>
      <ArticleDescription>
        Don't just view results, elicit actionable insight from your academic
        data.
      </ArticleDescription>
    </Card>
  );
};

const Card = styled.div`
  text-align: center;
  padding: 2.6rem 1rem;
`;

const FeaturedIcon = styled.img`
  width: 100%;
  max-width: 100px;
  min-height: 0;
  padding-bottom: 1rem;
`;

export default FeaturedCard;
