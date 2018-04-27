import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 0;
  background-clip: padding-box;
  padding: 1.3rem 1rem 1rem;
  text-align: center;
  color: #fff;
  font-weight: 500;
  display: block;
  cursor: pointer;
  border: 3px solid transparent;
  letter-spacing: 1px;
  width: 100%;
  max-width: 400px;
  text-decoration: none;
  margin: 2rem auto 0;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 16px;
  line-height: 24px;
  font-size: 1.6rem;
  line-height: 2.4rem;
  background: #188ba0;
`;

const PrimaryButton = props => <Button>{props.children}</Button>;

export default PrimaryButton;
