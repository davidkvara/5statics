import React from "react";
import Wrapper from "./Wrapper";
import SectionTitle from "./SectionTitle";
import BookPreview from "./BookPreview";

export default props => {
  return (
    <div className="popular-books">
      <Wrapper>
        <SectionTitle>Popular Books</SectionTitle>
        <div className="book-container">
          <BookPreview />
          <BookPreview />
          <BookPreview />
          <BookPreview />
          <BookPreview />
          <BookPreview />
        </div>
      </Wrapper>
    </div>
  );
};
