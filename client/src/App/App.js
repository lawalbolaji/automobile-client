import React, { useState, useEffect } from 'react';
import VehicleQuery from '../components/vehicleQuery/VehicleQuery';
import vehiclesApi from '../utils/vehiclesAPI';
import Vehicles from '../components/vehicles/Vehicles';
import Slider from '../components/slider/Slider';
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
    const chosenMake = makes[event.target.options.selectedIndex];
    const models = await vehiclesApi(`${urls.models}?model=${chosenMake}`);
    setMake(chosenMake);
    setModels(models);
  }

  async function handleModelChange(event) {
    const chosenModel = models[event.target.options.selectedIndex];
    const vehicles = await vehiclesApi(`${urls.vehicles}?make=${make}&model=${chosenModel}`);
    setVehicles(vehicles);
  }

  function increaseSlider(count) {
    setSlider(count + sliderIncrement);
  }

  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState('');
  const [models, setModels] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [slider, setSlider] = useState(0);

  // invoke effect only once
  useEffect(() => {
    vehiclesApi(urls.makes).then((data) => {
      setMakes(data);
    });
  }, []);

  // do not render slider if vehicles have not been loaded yet
  const sliderBar = vehicles.length ? <Slider increaseCount={increaseSlider} count={slider} /> : null;

  return (
    <div id="topApp">
      <div className="app">
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
        <Vehicles vehicles={vehicles} count={slider} increment={sliderIncrement} />
        {sliderBar}
      </div>
    </div>
  );
}
