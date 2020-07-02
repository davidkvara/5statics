import React from "react";
import styled from "@emotion/styled";

const Container = props => {
  return <Wrapper>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default Container;
