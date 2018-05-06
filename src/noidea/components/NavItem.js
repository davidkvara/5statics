import React from "react";

const NavItem = props => {
  return (
    <a href={props.to} className="nav-a">
      {props.children}
    </a>
  );
};

export default NavItem;
