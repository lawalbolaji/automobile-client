import React, { useState, useEffect } from 'react';
import VehicleQuery from '../components/vehicleQuery/VehicleQuery';
import vehiclesApi from '../utils/vehiclesAPI';
import Vehicles from '../components/vehicles/Vehicles';
import Slider from '../components/slider/Slider';
import ErrorMessage from '../components/errorMessage/ErrorMessage'
import './App.css';

export default function App() {
  // server endpoints
  const urls = {
    makes: 'http://localhost:8080/api/makes',
    models: 'http://localhost:8080/api/models',
    vehicles: 'http://localhost:8080/api/vehicles',
  };
  const sliderIncrement = 9;

  async function handleMakeChange(event) {
    // reset state
    setVehicles([]);
    setErrorMessage('');

    if(event.target.options.selectedIndex - 1 < 0){
      return;
    }

    const chosenMake = makes[event.target.options.selectedIndex - 1];
    const models = await vehiclesApi(`${urls.models}?make=${chosenMake}`);

    // check for 503 error from server
    if(models.error){
      setErrorMessage("Opps! Something went wrong. Please try again...");
      return;
    }
    setMake(chosenMake);
    setModels(models.result);
    if(!models.result.length){
      setErrorMessage(`There is no available model for ${chosenMake}`)
    }
  }

  async function handleModelChange(event) {
    // reset state
    setVehicles([]);
    setErrorMessage('');

    if(event.target.options.selectedIndex - 1 < 0){
      return;
    }

    const chosenModel = models[event.target.options.selectedIndex - 1];
    const vehicles = await vehiclesApi(`${urls.vehicles}?make=${make}&model=${chosenModel}`);

    if(vehicles.error){
      setErrorMessage("Opps! Something went wrong. Please try again...");
      return;
    }

    setVehicles(vehicles.result);
    if(!vehicles.result.length){
      setErrorMessage(`There is no available vehicle for ${make} ${chosenModel}`)
    }
  }

  function increaseSlider(cursor) {
    let newCursor = cursor + sliderIncrement < vehicles.length
                      ? cursor + sliderIncrement
                      : vehicles.length - 1
    setSlider(newCursor);
  }

  function decreaseSlider(cursor){
    let newCursor = cursor - sliderIncrement > 0 
                    ? cursor - sliderIncrement
                    : 0
    setSlider(newCursor);
  }

  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState('');
  const [models, setModels] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [slider, setSlider] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  // invoke effect only once
  useEffect(() => {
    vehiclesApi(urls.makes).then((data) => {
      if(data.error){
        setErrorMessage('Opps! Something went wrong. Please try again...');
      }
      setMakes(data.result);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  let renderedVehicles = models.length && vehicles.length
                          ? <Vehicles vehicles={vehicles} cursor={slider} increment={sliderIncrement} />
                          : null

  // do not render slider if vehicles have not been loaded yet
  const sliderBar = models.length && vehicles.length 
                    ? <Slider 
                          increaseCount={increaseSlider} 
                          decreaseCount={decreaseSlider} 
                          cursor={slider} 
                          cursorStop={vehicles.length}/>
                    : null;

  const errorRenderer = errorMessage 
                        ? <ErrorMessage message={errorMessage}/> 
                        : null

  return (
    <div id="topApp">
      <div className="app">
        <div className="introWrapper">
          <div className="introContent">
            <nav>
              <p>X</p>
              <p>Automobile Client</p>
            </nav>
            <header>
              <p>Hello Hello!</p>
              <p>Please choose your vehicle below!</p>
            </header>
            <VehicleQuery
              makes={makes}
              makeChangeHandler={handleMakeChange}
              models={models}
              modelChangeHandler={handleModelChange}
            />
          </div>
        </div>
        <div className="errorMessage">
          {errorRenderer}
        </div>
        <div className="resultContent">
          {renderedVehicles}
          {sliderBar}
        </div>
      </div>
    </div>
  );
}
