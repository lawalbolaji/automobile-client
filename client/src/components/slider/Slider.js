import React from 'react';
import './slider.css'

export default function Slider(props) {

    function handleClick(event){
      props.increaseCount(props.count);
    }
    return (
      <>
        <div className="slider">
            <button onClick={handleClick}>Next page</button>
        </div>
      </>
    );
  }