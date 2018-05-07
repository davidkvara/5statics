import React from "react";
import Nav from "./Nav";
import Wrapper from "./Wrapper";

class Header extends React.Component {
  state = { navIsVisible: true, width: window.innerWidth };

  handleToggle = () => {
    this.setState({ navIsVisible: !this.state.navIsVisible });
  };

  componentDidMount() {
    // მემგონი ძვირი ჯდება..
    // მაგრამ რეალურ სიტუაციაში საერთოდ არ მოგვიწევს ამ ფუნქციის გამოძახება
    // პროდუქციაში მაინც არ გავუშვებდი
    this.setState(state => {
      if (window.innerWidth < 601) {
        return { navIsVisible: false };
      }
    });
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth
    });
    if (Number(this.state.width) < 600) {
      this.setState({ navIsVisible: false });
    } else {
      this.setState({ navIsVisible: true });
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
              <a href="">TML</a>
            </h1>
            <div className="menu-btn">
              <button onClick={this.handleToggle} className="menu-toggle">
                menu
              </button>
            </div>
            {this.state.navIsVisible && <Nav />}
          </div>
        </Wrapper>
      </header>
    );
  }
}

export default Header;
