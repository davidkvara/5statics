import React from "react";
import NavItem from "./NavItem";

const Nav = props => {
  function close() {
    props.onClose();
  }
  return (
    <nav className="nav">
      <NavItem onClick={close} to="/">
        home
      </NavItem>
      <NavItem onClick={close} to="/about">
        about
      </NavItem>
      <NavItem onClick={close} to="/blog">
        blog
      </NavItem>
      <NavItem onClick={close} to="/catalog">
        catalog
      </NavItem>
      <NavItem onClick={close} to="/branches">
        branches
      </NavItem>
    </nav>
  );
};

export default Nav;
