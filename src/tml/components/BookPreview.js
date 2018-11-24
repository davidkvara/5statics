import React from "react";

const BookPreview = props => {
  return (
    <article className="book-box">
      <div className="book-cover" />
      <div className="book-pad">
        <h2 className="book-title">georgian prose</h2>
        <p className="book-list">author: unknown</p>
        <p className="book-list">imprint: soviet geo</p>
        <p className="book-list">genre: genre</p>
        <p className="book-list">published: 1984</p>
      </div>
    </article>
  );
};

export default BookPreview;
