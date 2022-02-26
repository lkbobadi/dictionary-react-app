import React from "react";
import Content from "./Content";
import "./App.css";

export default function App() {
  function search() {
    return "Hello";
  }
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='App'>
        <div className='search-section pt-5'>
          <h1 className='title mt-5'>Dictionary</h1>
          <h2>Broaden your horizon!</h2>
          <form onSubmit={search} class='pb-5'>
            <div className='search-wrap'>
              <input
                type='search'
                id='search'
                placeholder='Search for a word...'
              />
              <br />
              <input type='submit' id='submit' className='mt-3' />
            </div>
          </form>
        </div>
      </div>

      <div className='content-section pe-0'>
        <Content />
      </div>
    </div>
  );
}
