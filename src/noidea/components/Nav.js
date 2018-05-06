import React from "react";
import NavItem from "./NavItem";

const Nav = () => {
  return (
    <nav className="nav">
      <NavItem to="/">home</NavItem>
      <NavItem to="/about">about</NavItem>
      <NavItem to="/blog">blog</NavItem>
      <NavItem to="/catalog">catalog</NavItem>
      <NavItem to="/branches">branches</NavItem>
    </nav>
  );
};

export default Nav;
