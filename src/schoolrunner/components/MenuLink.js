import React from "react";
import styled from "styled-components";

const Link = styled.a`
  padding: 1.75rem 2.75rem;
  font-size: 18px;
  line-height: 27px;
  font-size: 1.8rem;
  line-height: 2.7rem;
  color: #bbc7ce;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  display: block;
  font-weight: 500;
  &:hover {
    color: #52c1ac;
  }
`;

const MenuLink = props => <Link href="">{props.children}</Link>;

export default MenuLink;
