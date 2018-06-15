import React from "react";
import { Link } from "react-router-dom";

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
      {renderNavItem("/branches", "catalog")}
    </nav>
  );
};

export default Nav;
