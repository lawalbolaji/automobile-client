import React from 'react'
import Vehicle from "../vehicle/Vehicle";
import './vehicles.css'

export default function Vehicles(props) {
  let count = props.count <= props.vehicles.length ? props.count : props.vehicles.length - props.increment;
  let vehicles = [...props.vehicles];
  let renderedVehicles = vehicles.length ? 
                  <div className="vehicles">
                        {vehicles.slice(count, count + props.increment).map((vehicle, index) => {
                          return <Vehicle key={index} vehicle={vehicle}/>
                        })}
                  </div> : null
  return (
    <div className="topVehicles">
      {renderedVehicles}      
    </div>
    );
  }