import React from "react";
import "./App.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className='photo-section row'>
        {props.photos.map(function (photo, index) {
          return (
            <div key={index}>
              <div className='col-4 m-2'>
                <a href={photo.src.original} target='_blank' rel='noreferrer'>
                  <img src={photo.src.landscape} className='img-fluid' />
                </a>
              </div>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
