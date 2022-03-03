import React from "react";
import "./App.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className='phonetics'>
        {props.phonetics.map(function (phonetic, index) {
          return (
            <ul key={index}>
              <span className='phonetic-set d-flex'>
                <a href={phonetic.audio} target='_blank' rel='noreferrer'>
                  Listen
                </a>
                <span className='phonetic-text'>{phonetic.text}</span>
              </span>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
