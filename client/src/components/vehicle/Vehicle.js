import React from 'react';
import './vehicle.css'

export default function Vehicles(props) {
    return (
      <>
        <div className="vehicle">
          <div className="vehicleWrapper">
            <div className="vehicleTitle">
              <p>{`${props.vehicle.make} ${props.vehicle.model}`}</p>
            </div>
            <div className="vehicleDetails">
              <div className="layer">
                <div className="element">
                  <div className="vertical">
                    <div>
                      {props.vehicle.engineCapacity}
                    </div>
                    <div className="label">
                      <p>Engine Capacity</p>
                    </div>
                  </div>
                </div>
                <div className="element">
                <div className="vertical">
                  
                </div>
                <div className="vertical">
                  <div>
                      {props.vehicle.enginePowerPS}
                    </div>
                    <div className="label">
                      Engine Power (PS)
                    </div>
                </div>
                </div>                
              </div>
              <div className="layer">
                <div className="element">
                  <div className="vertical">
                    <div>
                        {props.vehicle.enginePowerKW}
                    </div>
                    <div className="label">
                        Engine Power (KW)
                    </div>
                  </div>
                </div>
                <div className="element">
                  <div className="vertical">
                    <div>
                        {props.vehicle.fuelType}
                    </div>
                    <div className="label">
                      Fuel Type
                    </div>
                  </div>
                </div>
              </div>
              <div className="layer">
                <div className="element">
                  <div className="vertical">
                    <div>
                      {props.vehicle.bodyType}
                    </div>
                    <div className="label">
                      Body Type
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }