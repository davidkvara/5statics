import React from "react";
import { Link } from "@reach/router";

const NavItem = props => <Link {...props} className="nav-a" />;

const Nav = props => {
  function renderNavItem(to, text) {
    return <NavItem to={to} children={text} onClick={props.onClose} />;
  }
  return (
    <nav className={props.className ? "nav open" : "nav"}>
      {renderNavItem("/", "home")}
      {renderNavItem("/about", "about")}
      {renderNavItem("/blog", "blog")}
      {renderNavItem("/catalog", "catalog")}
      {renderNavItem("/branches", "branches")}
    </nav>
  );
};

export default Nav;
