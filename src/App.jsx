import { useState } from 'react';

export default function App() {
  
  //hook------------------------------------------------------------------------
  
  function useTimeTravel() {
    
  const [dates, setDates] = useState([]);
  const [displayIndex, setDisplayIndex] = useState(-1);

  let currVal = dates[displayIndex];
  

  //save function to set and save a new current value
  const save = (e) => {
    const { value } = e.target;

    setDisplayIndex((prevIndex) => prevIndex + 1);
    
    setDates((prevState) => [ ...prevState, value ])
  }

  //undo to set the current value to the previous value
  const undo = () => {
    setDisplayIndex((prevIndex) => prevIndex - 1)
  }

  //redo to set the current value to the next value
  const redo = () => {
    setDisplayIndex((prevIndex) => prevIndex + 1)
  }

  return [displayIndex, currVal, dates, save, undo, redo]
}

//App ----------------------------------------------------------------------------

  const [displayIndex, currVal, dates, save, undo, redo ] = useTimeTravel();
  
 
  
  console.log('DATES', dates);
  console.log('currVal', currVal);
  console.log('displayIndex', displayIndex);
  

  return (
  <div>
    <button onClick={undo}> undo </button>
    <button onClick={redo}> redo </button>
    <input type="date" aria-label='date' value={currVal} onChange={save} />
    {currVal ? ( <p>the date you selected is: {currVal} </p>) : <p>please select a date</p>}

  </div>
    );
}
