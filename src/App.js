import React from "react";
import Content from "./Content";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='App'>
        <Search />
      </div>

      <div className='content-section pe-0'>
        <Content />
      </div>
    </div>
  );
}
