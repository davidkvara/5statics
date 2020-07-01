import React from "react";
import styled from "@emotion/styled";

export default () => (
  <Header>
    <div style={{ margin: 0, width: "2rem" }}>
      <a href="#top">{logoIcon}</a>
    </div>
    <nav style={{ display: "flex" }}>
      <NavLink href="#writing">writing</NavLink>
      <NavLink href="#reading">reading</NavLink>
    </nav>
  </Header>
);

const logoIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32">
    <path
      fill="currentColor"
      d="M16 7 C13 7 2 9 2 16 C2 23 6 23 10 24 L11 28 L12 26 L20 26 L21 28 L22 24 C26 23 30 23 30 16 C30 9 19 7 16 7 M4 18 A4 4 0 0 1 12 18 A4 4 0 0 1 4 18 M20 18 A4 4 0 0 1 28 18 A4 4 0 0 1 20 18 "
    />
  </svg>
);

const Header = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6em 1.2em;
  @media (min-width: 600px) {
    padding: 1em 2.4em;
  }
`;

const NavLink = styled.a`
  display: block;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.33s ease-in;
  font-size: 12px;
  margin: 0 1rem;

  @media (min-width: 600px) {
      margin: 0 1.5rem;

`;
