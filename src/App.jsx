import useTimeTravel from './hooks/useTimeTravel.js';

export default function App() {

  const [ displayIndex, dates, currVal, save, undo, redo ] = useTimeTravel();


  return (
    <div>
      <section>
        <button aria-label='undo' onClick={undo} disabled={displayIndex <= 0}> undo </button>
        <button aria-label='redo' onClick={redo} disabled={displayIndex === (dates.length - 1)}> redo </button>
        <input type="date" aria-label='date' value={currVal} onChange={save} />
      </section>
      {displayIndex < 0 ? (<p aria-label='display'>please select a date</p>) :( <p aria-label='display'>the date you selected is: {currVal} </p>) }

    </div>
    );
}
