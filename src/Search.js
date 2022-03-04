import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Search(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000019b2c6d6afb1d4f4e94ef590e8eebcd3e";

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(e) {
    e.preventDefault();
    search();
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
        <form onSubmit={handleSubmit} className='pb-5'>
          <div className='search-wrap'>
            <input
              type='search'
              id='search'
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
              placeholder='Search for a word...'
            />
            <br />
            <input type='submit' id='submit' className='mt-3' />
          </div>
          <Results results={results} />
          <Photos photos={photos} />
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
