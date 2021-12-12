import Vehicle from "./Vehicle";

export default function Vehicles(props) {
  let count = props.count <= props.vehicles.length ? props.count : props.vehicles.length - props.increment;
  let vehicles = [...props.vehicles];
  return (
      <>
        <p>vehicle component here {count}</p>
        {vehicles.slice(count, count + props.increment).map((vehicle, index) => {
          return <Vehicle key={index} vehicle={vehicle}/>
        })}
      </>
    );
  }