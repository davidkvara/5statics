import React, { Fragment } from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import WorksSection from "./components/WorksSection";
import Posts from "./components/Posts";
import "./App.css";
// data
import { readingList, writingList, workList as works } from "./data";

export default () => (
  <Fragment>
    <Header />
    <Banner
      author="Adam Morse. Designer in London"
      description="Trying to make the web fast, readable, and ease to navigate."
    />
    <WorksSection works={works} />
    <Posts writings={writingList} readings={readingList} />
    <Footer>Goodnight!</Footer>
  </Fragment>
);
