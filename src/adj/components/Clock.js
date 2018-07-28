import React from "react";

class Clock extends React.Component {
  state = { time: new Date() };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div {...this.props} className="clock-widget">
        {this.state.time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        })}
      </div>
    );
  }
}

export default Clock;
