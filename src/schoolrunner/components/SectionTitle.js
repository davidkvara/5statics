import React from "react";
import styled, { css } from "styled-components";

const SectionTitle = props => <Title {...props} />;

const Title = styled.h2`
  font-family: "Sharp Sans Medium", HelveticaNeue, Helvetica Neue, Helvetica,
    Arial, Lucida Grande, sans-serif;
  padding: 0 0 2.6rem;
  max-width: 60%;
  margin: 0 auto;
  font-weight: 400;
  font-size: 26px;
  line-height: 39px;
  font-size: 2.6rem;
  line-height: 3.9rem;
  text-align: center;
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

export default SectionTitle;
