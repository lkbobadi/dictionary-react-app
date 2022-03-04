import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className='results p-0'>
        <div className='content-section g-0 mt-2'>
          <h3>{props.results.word}</h3>
          <Phonetics phonetics={props.results.phonetics} />
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index} className='meaning m-3'>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
