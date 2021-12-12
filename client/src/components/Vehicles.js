import Vehicle from "./Vehicle";

export default function Vehicles(props) {
    return (
      <>
        <p>vehicle component here</p>
        {props.vehicles.map((vehicle, index) => {
          return <Vehicle key={index} vehicle={vehicle}/>
        })}
      </>
    );
  }