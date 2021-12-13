import React from 'react'
import Vehicle from "../vehicle/Vehicle";
import './vehicles.css'

export default function Vehicles(props) {
  let cursor = props.cursor <= props.vehicles.length 
                ? props.cursor 
                : props.vehicles.length - props.increment;
  let stopCursor = cursor + props.increment < props.vehicles.length 
                    ? cursor + props.increment 
                    : props.vehicles.length;
  let vehicles = [...props.vehicles];
  let renderedVehicles = vehicles.length ? 
                  <div className="vehicles">
                        {vehicles.slice(cursor, stopCursor).map((vehicle, index) => {
                          return <Vehicle key={index} vehicle={vehicle}/>
                        })}
                  </div> : null
  return (
    <div className="topVehicles">
      {renderedVehicles}      
    </div>
    );
  }