import React from 'react';
import './errorMessage.css'

export default function ErrorMessage(props) {
    return (
      <>
        <div className="errorMessage">
            <p>{props.message}</p>
        </div>
      </>
    );
  }