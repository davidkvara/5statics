import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  font-family: Avenir, HelveticaNeue, Helvetica Neue, Helvetica, Arial,
    Lucida Grande, sans-serif;
  margin: 0;
  padding: 0 0 1rem;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

const ArticleTitle = props => <H3>{props.children}</H3>;

export default ArticleTitle;
