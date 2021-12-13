import React from 'react'
import './vehicleQuery.css'

export default function VehicleQuery(props) {
  let renderedModel = props.models.length ? <div className="container">
      <label htmlFor="model-select" className="label">Select Model</label>
      <div className="select">
        <select onChange={props.modelChangeHandler} id="model-select">
          {["---Select Model---",...props.models].map((model, index) => {
            return <option key={index} value={model}>{model}</option>
          })}
        </select>
      </div>
    </div> : null
    return (
      <div className="queryForm">
        <form>
          <div className="container">
            <label htmlFor="make-select" className="label">Select Make</label>
            <div className="select">
              <select onChange={props.makeChangeHandler} id="make-select">
                {["---Select Make---",...props.makes].map((make, index) => {
                  return <option key={index} value={make}>{make}</option>
                })}
              </select>
            </div>
          </div>
          {renderedModel}
        </form>
      </div>
    );
  }
