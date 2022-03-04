import React from "react";

import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='App'>
        <Search defaultKeyword='Sunrise' />
      </div>
    </div>
  );
}
