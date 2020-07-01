import React from "react";

import "./style.css";

import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import WorksSection from "./components/works/WorksSection";
import Posts from "./components/posts/PostsSection";
// data
import { readingList, writingList, workList as works } from "./data";

export default () => (
  <>
    <Header />
    <HeroBanner
      author="Adam Morse. Designer in London"
      description="Trying to make the web fast, readable, and ease to navigate."
    />
    <main style={{ paddingTop: "4rem" }}>
      <WorksSection works={works} />
      <Posts title={"writing"} list={writingList.list} />
      <Posts title={"reading list"} list={readingList.list} />
    </main>
    <footer className="footer">GoodNight!</footer>
  </>
);
