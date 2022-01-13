import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App.jsx"

describe('useTimeTravel', () => {
  it('should update the displayed date based on input', () => {
    render (<App />);

    const undoBtn = screen.getByLabelText(/undo/i);
    const redoBtn = screen.getByLabelText(/redo/i);
    const dateInput = screen.getByLabelText(/date/i);

    screen.getByText(/please select a date/i)
    
    fireEvent.change(dateInput, { target: { value: '2001-01-01'}});
    screen.getByText(/the date you selected is: 2001-01-01/i);

    fireEvent.change(dateInput, { target: { value: '2001-01-02'}});
    screen.getByText(/the date you selected is: 2001-01-02/i);

    fireEvent.click(undoBtn);
    screen.getByText(/the date you selected is: 2001-01-01/i);

    fireEvent.change(dateInput, { target: { value: '2001-01-04'}});
    screen.getByText(/the date you selected is: 2001-01-04/i);

    fireEvent.click(undoBtn);
    screen.getByText(/the date you selected is: 2001-01-01/i);

    fireEvent.click(redoBtn);
    screen.getByText(/the date you selected is: 2001-01-04/i);


  })
})