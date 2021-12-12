import React from 'react';
import './vehicle.css'

export default function Vehicles(props) {
    return (
      <>
        <p className="vehicle">
          Make: {props.vehicle.make} <br />
          Model: {props.vehicle.model} <br />
          Engine Capacity: {props.vehicle.engineCapacity} <br />
          Engine Power (PS): {props.vehicle.enginePowerPS} <br />
          Engine Power (KW): {props.vehicle.enginePowerKW} <br />
          Fuel Type: {props.vehicle.fuelType} <br />
          Body Type: {props.vehicle.bodyType}
        </p>
      </>
    );
  }