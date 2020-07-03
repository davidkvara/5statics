import React from "react";
import styled from "@emotion/styled";

const Button = props => {
  return <ThemedButton {...props} />;
};

const ThemedButton = styled.button`
  border: 0;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 0.75rem;
  border-radius: 3px;
  font-size: 0.95rem;
  cursor: pointer;
`;

export default Button;
