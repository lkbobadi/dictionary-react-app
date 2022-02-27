import React, { useState } from "react";
import "./App.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    return alert(`Hello, we're trying to look for ${keyword}'s definition!`);
  }

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  return (
    <div className='search-section pt-5'>
      <h1 className='title mt-5'>Dictionary</h1>
      <h2>Broaden your horizon!</h2>
      <form onSubmit={search} class='pb-5'>
        <div className='search-wrap'>
          <input
            type='search'
            id='search'
            onChange={handleKeywordChange}
            placeholder='Search for a word...'
          />
          <br />
          <input type='submit' id='submit' className='mt-3' />
        </div>
      </form>
    </div>
  );
}
