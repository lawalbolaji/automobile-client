export default function VehicleQuery(props) {
    return (
      <>
        <form>
          <select onChange={props.makeChangeHandler}>
            {props.makes.map((make, index) => {
              return <option key={index} value={make}>{make}</option>
            })}
          </select>
          <br />
          <select onChange={props.modelChangeHandler}>
            {props.models.map((model, index) => {
              return <option key={index} value={model}>{model}</option>
            })}
          </select>
          <br />
          <br />
        </form>
      </>
    );
  }
