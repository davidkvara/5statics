import React from "react";
import styled from "styled-components";

export default function Wrapper(props) {
  return <Container>{props.children}</Container>;
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;
