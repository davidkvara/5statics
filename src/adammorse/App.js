import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import Wrapper from "./components/Wrapper";
import SectionTitle from "./components/SectionTitle";

import PostsSection from "./components/PostsSection";
import WorkArticle from "./components/WorkArticle";
import WorkArticleLarge from "./components/WorkArticleLarge";

import "./App.css";

const App = props => {
  const { readings, writings, works, worksLarge } = props;
  return (
    <div>
      <Header />
      <Banner
        author="Adam Morse. Designer in London"
        description="Trying to make the web fast, readable, and ease to navigate."
      />

      <section className="featured-work">
        <Wrapper>
          <SectionTitle>work</SectionTitle>
          {/* აქ ეს ორი სექცია არ მომწონს, მაგრამ ამ ეტაპზე ვტოვებ (გასაერთიანებელია) */}
          <div className="works">
            {works.map((work, i) => <WorkArticle key={i} {...work} />)}
          </div>

          <div className="works-2">
            {worksLarge.map((work, i) => (
              <WorkArticleLarge key={i} {...work} />
            ))}
          </div>
        </Wrapper>
      </section>

      <div className="posts">
        <Wrapper>
          <PostsSection title="writing" posts={writings} />
          <PostsSection title="reading list" posts={readings} />
        </Wrapper>
      </div>

      <Footer>Goodnight!</Footer>
    </div>
  );
};

export default App;
