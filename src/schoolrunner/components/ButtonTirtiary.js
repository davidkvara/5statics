import React from "react";
import styled from "styled-components";

const Button = styled.a`
  max-width: 150px;
  border-radius: 0;
  background-clip: padding-box;
  padding: 1rem 1rem 0.7rem;
  text-align: center;
  color: #52c1ac;
  font-weight: 500;
  display: inline-block;
  cursor: pointer;
  border: 2px solid #52c1ac;
  letter-spacing: 1px;
  width: 100%;
  -webkit-font-smoothing: subpixel-antialiased;
  font-size: 14px;
  line-height: 21px;
  font-size: 1.4rem;
  line-height: 2.1rem;
  &:hover {
    border: 2px solid #42b8a1;
    background: #78cebe;
    color: #fff;
  }
`;

const ButtonTirtiary = props => <Button>{props.children}</Button>;

export default ButtonTirtiary;
