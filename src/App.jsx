import { useState } from 'react';

function useTimeTravel(initialState) {
  
  const [state, setState] = useState(initialState);

  //will add:
  //save function to set and save a new current value
  //undo to set the current value to the previous value
  //redo to set the current value to the next value

}

export default function App() {

  const [state, save, undo, redo] = useTimeTravel({
    currVal: '',
    prevVal: '',
    dates: [],
  })
  
  return (
  <div>
    <button>undo</button>
    <button>redo</button>
    <input type="date" aria-label='date' />
    <p>please select a date</p>
  </div>
    );
}
