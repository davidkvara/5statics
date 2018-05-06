import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import LatestPosts from "./components/LatestPosts";
import PopularBooks from "./components/PopularBooks";

// import Notice from "./components/Notice";
import "./main.css";

const App = () => {
  return (
    <div className="library">
      {/* <Notice /> */}
      <Header />
      <Slider />
      <LatestPosts />
      <PopularBooks />
    </div>
  );
};

export default App;
