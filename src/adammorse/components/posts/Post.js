import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Post = ({ text }) => (
  <PostItem href="https://example.com">{text}</PostItem>
);

const PostItem = styled.a`
  display: block;
  text-decoration: none;
  transition: opacity 0.25s ease-out;
  border-bottom: 1px dotted;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.3em 0;
  opacity: 0.8;
  &:hover,
  &:focus {
    opacity: 0.9;
  }
  @media (min-width: 600px) {
    font-size: 1.2rem;
  }
`;

Post.propTypes = {
  text: PropTypes.string.isRequired
};

export default Post;
