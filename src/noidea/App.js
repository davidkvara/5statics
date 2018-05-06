import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import LatestPosts from "./components/LatestPosts";
import PopularBooks from "./components/PopularBooks";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  );
};

export default App;
