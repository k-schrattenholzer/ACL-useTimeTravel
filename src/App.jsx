import { useState } from 'react';

export default function App() {

//hoook

  function useTimeTravel() {
  
  // const [state, setState] = useState(initialState);
  const [currVal, setCurrVal] = useState('');
  const [prevVal, setPrevVal] = useState();
  const [dates, setDates] = useState([]);

  //will add:
  //save function to set and save a new current value
  const save = (e) => {
    setCurrVal(e.target.value);
    
    // dates.push(e.target.value);
  }

  //undo to set the current value to the previous value
  const undo = () => {

  }

  //redo to set the current value to the next value
  const redo = () => {

  }

  return [currVal, prevVal, dates, save, undo, redo]
}

///normal App

  const [currVal, prevVal, dates, save, undo, redo ] = useTimeTravel();

  return (
  <div>
    <button>undo</button>
    <button>redo</button>
    <input type="date" aria-label='date' value={currVal} onChange={save} />
    {currVal ? ( currVal ) : <p>please select a date</p>}
  </div>
    );
}
