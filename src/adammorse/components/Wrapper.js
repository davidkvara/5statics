import React from "react";
import styled from "@emotion/styled";

export default props => <Container>{props.children}</Container>;

const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 0.75rem;
`;
