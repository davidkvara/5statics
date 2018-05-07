import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

class Header extends React.Component {
  state = { menuToggle: true, width: window.innerWidth };

  handleToggle = () => {
    this.setState({ menuToggle: !this.state.menuToggle });
  };

  componentDidMount() {
    // მემგონი ძვირი ჯდება..
    // მაგრამ რეალურ სიტუაციაში საერთოდ არ მოგვიწევს ამ ფუნქციის გამოძახება
    // პროდუქციაში მაინც არ გავუშვებდი
    this.setState(state => {
      if (window.innerWidth < 601) {
        return { menuToggle: false };
      }
    });
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth
    });
    if (Number(this.state.width) < 600) {
      this.setState({ menuToggle: false });
    } else {
      this.setState({ menuToggle: true });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <header className="header">
        <Wrapper>
          <div className="header-container">
            <h1 className="logo">
              <Link to="/">TML</Link>
            </h1>
            <div className="menu-btn">
              <button onClick={this.handleToggle} className="menu-toggle">
                menu
              </button>
            </div>
            {this.state.menuToggle && <Nav />}
          </div>
        </Wrapper>
      </header>
    );
  }
}

export default Header;
