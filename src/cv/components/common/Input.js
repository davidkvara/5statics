import React from "react";
import styled from "@emotion/styled";

const Input = props => {
  return <SearchInput {...props} />;
};

const SearchInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid royalblue;
  border-radius: 3px;
  font-size: 0.9rem;
  line-height: 1.2;
  font-family: inherit;
`;

export default Input;
