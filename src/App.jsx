import { useState } from 'react';

export default function App() {

//hoook

  function useTimeTravel() {
  
  // const [state, setState] = useState(initialState);
  const [dates, setDates] = useState([]);
  const [displayIndex, setDisplayIndex] = useState('');
  const [prevVal, setPrevVal] = useState('');
  let currVal = dates[displayIndex];

  //save function to set and save a new current value
  const save = (e) => {
    const { value } = e.target;

    setDisplayIndex(dates.length);
    
    setDates((prevState) => {
      return [
        ...prevState,
        value
      ]
    })
  }

  //undo to set the current value to the previous value
  const undo = () => {

  }

  //redo to set the current value to the next value
  const redo = () => {

  }

  return [displayIndex, prevVal, currVal, dates, save, undo, redo]
}

///normal App

  const [displayIndex, prevVal, currVal, dates, save, undo, redo ] = useTimeTravel();

  

  return (
  <div>
    <button onChange={undo}> undo </button>
    <button onChange={redo}> redo </button>
    <input type="date" aria-label='date' value={displayIndex} onChange={save} />
    {currVal ? currVal : <p>please select a date</p>}
    <section>
      these are the selected dates
      {dates}
    </section>
  </div>
    );
}
