import React from "react";
import Nav from "./Nav";
import Wrapper from "./Wrapper";

const Header = props => {
  return (
    <header className="header">
      <Wrapper>
        <div className="header-container">
          <h1 className="logo">
            <a href="">TML</a>
          </h1>
          <Nav />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
