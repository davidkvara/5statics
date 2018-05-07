import React from "react";
import Slider from "../components/Slider";
import LatestPosts from "../components/LatestPosts";
import PopularBooks from "../components/PopularBooks";

const Home = () => {
  return (
    <Aux>
      <Slider />
      <LatestPosts />
      <PopularBooks />
    </Aux>
  );
};

const Aux = props => props.children;

export default Home;
