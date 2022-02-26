import React from "react";
import "./App.css";

export default function Content() {
  return (
    <div className='contents'>
      <h3>
        Word <span className='phonics'>Phonics</span>
      </h3>

      <ol className='sentences'>
        <li>Example 1</li>
        <li>Example 2</li>
        <li>Example 3</li>
      </ol>
    </div>
  );
}
