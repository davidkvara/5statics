import React from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

import WorksSection from "./components/WorksSection";
import PostsSection from "./components/PostsSection";

import "./App.css";

const App = props => {
  const { readings, writings, works } = props;

  return (
    <div>
      <Header />
      <Banner
        author="Adam Morse. Designer in London"
        description="Trying to make the web fast, readable, and ease to navigate."
      />
      <WorksSection works={works} />

      <div className="posts">
        {/* გასაკომპონენტებელი?! */}
        <Wrapper>
          <PostsSection title="writing" posts={writings} />
          <PostsSection title="reading list" posts={readings} />
        </Wrapper>
      </div>

      <Footer>Goodnight!</Footer>
    </div>
  );
};

App.propTypes = {
  readings: PropTypes.array.isRequired,
  writings: PropTypes.array.isRequired,
  works: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default App;
