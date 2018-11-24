import React, { Fragment } from "react";
import Slider from "../components/Slider";
import LatestPosts from "../components/LatestPosts";
import PopularBooks from "../components/PopularBooks";

export default () => (
  <Fragment>
    <Slider />
    <LatestPosts />
    <PopularBooks />
  </Fragment>
);
