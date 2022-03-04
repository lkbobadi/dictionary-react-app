import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Results from "./Results";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(e) {
    setKeyword(e.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className='search-section pt-5'>
        <h1 className='title mt-5'>
          <a href='/'>Dictionary</a>
        </h1>
        <h2>Broaden your horizon!</h2>
        <form onSubmit={search} className='pb-5'>
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
          <Results results={results} />
        </form>
        <div className='footer'>
          Open Source by <span className='github-link'>Laura Bobadilla</span>
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
