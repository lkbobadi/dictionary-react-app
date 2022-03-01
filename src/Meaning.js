import React from "react";
import Synonyms from "./Synonyms";
import "./App.css";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className='Meaning'>
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              {definition.example}
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
