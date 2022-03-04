import React from "react";
import Synonyms from "./Synonyms";
import "./App.css";

export default function Meaning(props) {
  return (
    <div className='meaning-section'>
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <ul>{definition.example}</ul>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
