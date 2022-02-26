import React from "react";
import "./App.css";

export default function App() {
  function search() {
    return "Hello";
  }
  return (
    <div className='container'>
      <div className='App'>
        <div className='search-section'>
          <h1 className='title mt-5'>Dictionary</h1>
          <h2>Broaden your horizon!</h2>
          <form onSubmit={search}>
            <div className='search-wrap'>
              <input type='search' id='search' placeholder='Search a word...' />
              <br />
              <input type='submit' id='submit' className='mt-3' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
