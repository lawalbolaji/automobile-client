export default function Slider(props) {

    function handleClick(event){
      props.increaseCount(props.count);
    }
    return (
      <>
        <p>
            <button onClick={handleClick}>Next page</button>
        </p>
      </>
    );
  }