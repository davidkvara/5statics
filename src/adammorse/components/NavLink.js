import React from "react";

const NavLink = ({ to, children }) => (
  <a href={to} className="navlink">
    {children}
  </a>
);

export default NavLink;
