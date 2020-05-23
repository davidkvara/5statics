import React from "react";
import Media from "react-media";
import Clock from "./Clock";

export default ({ title = "adjara.com" }) => (
  <header className="header">
    <div className="container header-container">
      <div className="weather-widget">
        16&deg;<span className="city">თბილისი</span>
      </div>
      <div className="title">{title}</div>
      <Media query="(min-width: 930px)" render={() => <Clock />} />
    </div>
  </header>
);