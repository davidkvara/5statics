import React from "react";
import styled, { css } from "styled-components";

export default function Section({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

const Container = styled.div`
  padding: 4.8rem 0;
  ${props =>
    props.bg &&
    css`
      background-color: #52c1ac;
      background-image: url(https://www.schoolrunner.org/img/icon-texture-bg-07.png);
    `};
  ${props =>
    props.simple &&
    css`
      padding: 2.6rem 0 4.8rem;
    `};
`;
