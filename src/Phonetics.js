import React from "react";
import "./App.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className='phonetic-section'>
        <div className='phonetics d-flex'>
          {props.phonetics.map(function (phonetic, index) {
            return (
              <div key={index} className='phonetic-set  '>
                <a
                  href={phonetic.audio}
                  target='_blank'
                  rel='noreferrer'
                  className='audio'
                >
                  Listen
                </a>
                <span className='phonetic-text  '>{phonetic.text}</span>
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
