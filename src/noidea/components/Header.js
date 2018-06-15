import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

class Header extends React.Component {
  state = { navOpen: false };

  handleToggle = () => this.setState({ navOpen: !this.state.navOpen });
  handleClose = () => this.setState({ navOpen: false });

  render() {
    return (
      <header className="header">
        <Wrapper>
          <div className="header-container">
            <h1 className="logo">
              <Link to="/">TML</Link>
            </h1>
            <MenuToggleButton onToggle={this.handleToggle}>
              menu
            </MenuToggleButton>
            <Nav
              onClose={this.handleClose}
              className={this.state.navOpen && "open"}
            />
          </div>
        </Wrapper>
      </header>
    );
  }
}

const MenuToggleButton = ({ onToggle, children }) => (
  <div className="menu-btn">
    <button onClick={onToggle} className="menu-toggle">
      {children}
    </button>
  </div>
);

export default Header;
