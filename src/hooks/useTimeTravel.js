import { useState } from 'react';

export default function useTimeTravel() {
    
  const [dates, setDates] = useState([]);
  const [displayIndex, setDisplayIndex] = useState(-1);

  const currVal = (dates <= 0) ? 'no date selected' : dates[displayIndex];
  
  const save = (e) => {
    const { value } = e.target;

    // setDisplayIndex((prevIndex) => prevIndex + 1);
    // if the index is less than the length of the array then setDisplayIndex(dates.length) otherwise setDisplayIndex(displayIndex - 1)
    setDates((prevState) => [ ...prevState.slice(0, (displayIndex + 1)), value, ...prevState.slice((displayIndex + 1), dates.length + 1) ])
    
    setDisplayIndex((prevIndex) => prevIndex + 1);
  }

  const undo = () => {
    setDisplayIndex((prevIndex) => prevIndex - 1)
  }

  const redo = () => {
    setDisplayIndex((prevIndex) => prevIndex + 1)
  }

  return [displayIndex, currVal, save, undo, redo]
}