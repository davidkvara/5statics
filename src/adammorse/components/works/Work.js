import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const WorkArticle = ({ media, title, description }) => {
  return (
    <article className="work">
      <Thumbnail style={{ backgroundImage: `url(${media})` }} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </article>
  );
};

const Thumbnail = styled.div`
  padding-bottom: 54%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Title = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 1.25rem;
  text-transform: capitalize;
`;

const Description = styled.h2`
  font-weight: 400;
  margin-top: 0;
  padding-bottom: 0.5rem;
  font-size: 0.925rem;
`;

WorkArticle.propTypes = {
  media: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default WorkArticle;
