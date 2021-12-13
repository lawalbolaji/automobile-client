import React from 'react';
import './slider.css'

export default function Slider(props) {

    function handleNextClick(event){
      props.increaseCount(props.cursor);
    }

    function handlePreviousClick(event){
      props.decreaseCount(props.cursor);
    }

    return (
      <>
        <div className="slider">
            <button onClick={handlePreviousClick} className="previous">{"<"} Previous Page</button>
            <button onClick={handleNextClick} className="next">Next page {">"}</button>
        </div>
      </>
    );
  }