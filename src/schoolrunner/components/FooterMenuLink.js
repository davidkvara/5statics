import React from "react";
import styled from "styled-components";

const Link = styled.a`
  display: block;
  padding: 1rem 0;
  padding-top: 1rem;
  font-weight: 500;
  color: #727c80;
  border-bottom: 0;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    color: #52c1ac;
  }
`;
const FooterMenuLink = props => <Link href="">{props.children}</Link>;

export default FooterMenuLink;
