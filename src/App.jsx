import useTimeTravel from './hooks/useTimeTravel.js';

export default function App() {

  const [ displayIndex, currVal, save, undo, redo ] = useTimeTravel();


  return (
    <div>
      <section>
        <button onClick={undo}> undo </button>
        <button onClick={redo}> redo </button>
        <input type="date" aria-label='date' value={currVal} onChange={save} />
      </section>
      {displayIndex < 0 ? (<p>please select a date</p>) :( <p>the date you selected is: {currVal} </p>) }

    </div>
    );
}
