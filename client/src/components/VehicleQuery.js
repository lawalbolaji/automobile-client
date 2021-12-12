import React, {useState} from 'react';
import vehiclesApi from '../utils/getVehicles'
import Vehicles from './Vehicles';


export default function VehicleQuery() {
  async function handleMakeChange(event){
    let chosenMake = makes[event.target.options.selectedIndex];
    let models = await vehiclesApi('http://localhost:8080/api/models?make='+chosenMake);
    setMake(chosenMake);
    setModels(models);
  }

  async function handleModelChange(event){
    let chosenModel = models[event.target.options.selectedIndex];
    let vehicles = await vehiclesApi('http://localhost:8080/api/vehicles?make='+make+'&model='+chosenModel);
    setVehicles(vehicles);
  }


  // todo: get makes
  // todo: pre-populate make select with list of makes avilable
  const [make, setMake] = useState('');
  const [makes] = useState(['BMW', 'FORD'])
  const [models, setModels] = useState([]);
  const [vehicles, setVehicles] = useState([]);

    return (
      <>
        <form>
          <select onChange={handleMakeChange}>
            {makes.map((make, index) => {
              return <option key={index} value={make}>{make}</option>
            })}
          </select>
          <br />
          <select onChange={handleModelChange}>
            {models.map((model, index) => {
              return <option key={index} value={model}>{model}</option>
            })}
          </select>
          <br />
          <br />
        </form>
        <Vehicles vehicles={vehicles}/>
      </>
    );
  }
