import React from "react";

function SearchBook(props) {
  return (
    <input
      onChange={props.handleBook}
      type="text"
      placeholder="insert book title here"
      id="input"
    />
  );
}

export default SearchBook;
