import React from "react";
import { Link } from "react-router-dom";

const NavItem = props => {
  return <Link {...props} className="nav-a" />;
};

export default NavItem;
