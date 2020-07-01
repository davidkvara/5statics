import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Wrapper from "./Wrapper";

const Banner = ({ author, description }) => (
  <Hero>
    <Wrapper>
      <h1 style={{ marginBottom: 0, color: "#363634", fontSize: "1rem" }}>
        {author}
      </h1>
      <h2 style={{ fontSize: "2rem" }}>{description}</h2>
    </Wrapper>
  </Hero>
);

const Hero = styled.div`
  padding: 4rem 0;
  background: #f0f5f8;

  @media (min-width: 600px) {
    padding: 8rem 0;
`;

Banner.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Banner;
