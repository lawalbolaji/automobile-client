import React from 'react'
import './vehicleQuery.css'

export default function VehicleQuery(props) {
    return (
      <>
        <form>
          <div className="container">
            <label htmlFor="make-select" className="label">Choose Make</label>
            <div className="select">
              <select onChange={props.makeChangeHandler} id="make-select">
                {props.makes.map((make, index) => {
                  return <option key={index} value={make}>{make}</option>
                })}
              </select>
            </div>
          </div>
          <div className="container">
            <label htmlFor="model-select" className="label">Choose Model</label>
            <div className="select">
              <select onChange={props.modelChangeHandler} id="model-select">
                {props.models.map((model, index) => {
                  return <option key={index} value={model}>{model}</option>
                })}
              </select>
            </div>
          </div>
        </form>
      </>
    );
  }
