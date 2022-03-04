import React from "react";
import Synonyms from "./Synonyms";
import "./App.css";

export default function Meaning(props) {
  return (
    <div className='meaning-section'>
      <h2 className='partsofspeech'>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className='definition'>
              <strong>Definition: </strong>
              {definition.definition}
            </div>
            <ul className='example'>
              <strong>Example:</strong>
              {definition.example}
            </ul>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
