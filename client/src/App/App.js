import React, { useState, useEffect } from 'react';
import VehicleQuery from '../components/vehicleQuery/VehicleQuery';
import vehiclesApi from '../utils/vehiclesAPI'
import Vehicles from '../components/vehicles/Vehicles';
import Slider from '../components/slider/Slider'
import './App.css'

export default function App() {

  async function handleMakeChange(event){
    let chosenMake = makes[event.target.options.selectedIndex];
    let models = await vehiclesApi('http://localhost:8080/api/models?make='+chosenMake)
    setMake(chosenMake);
    setModels(models);
  }

  async function handleModelChange(event){
    let chosenModel = models[event.target.options.selectedIndex];
    let vehicles = await vehiclesApi('http://localhost:8080/api/vehicles?make='+make+'&model='+chosenModel);
    setVehicles(vehicles);
  }

  function increaseSlider(count){
    setSlider(count+sliderIncrement);
  }

  const [makes, setMakes] = useState([]);
  const [make, setMake] = useState('');
  const [models, setModels] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [slider, setSlider] = useState(0);

  const sliderIncrement = 9;

  // invoke effect only once
  useEffect(() => {
    vehiclesApi('http://localhost:8080/api/makes').then(data => {
      setMakes(data);
    })
  }, []);

  let sliderBar = vehicles.length ? <Slider increaseCount={increaseSlider} count={slider}/> : null

  return (
    <div className="top-level">
      <nav>
        <span id="icon">X</span> Automobile Client
      </nav>
      <header>
        Find your Vehicle so that we can personalize your experience.
      </header>
      <main>
      </main>
      <VehicleQuery makes={makes} makeChangeHandler={handleMakeChange}
                    models={models} modelChangeHandler={handleModelChange}/>
      <Vehicles vehicles={vehicles} count={slider} increment={sliderIncrement}/>
      {sliderBar}
    </div>
  );
}
