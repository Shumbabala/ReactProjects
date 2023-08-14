import { useState } from "react";

import "./StartingInputForm.css";

export default function StartingInputForm(props) {
  //component object and variable declaration goes here
  const [savingsData, setSavingsData] = useState({
    currentSavings: 0,
    yearlySavings: 0,
  });
  const defaultInputValues = "(Amount >0)";

  //component logic goes here
  function inputChangeHandler(event) {
    switch (event.target.id) {
      case "current-savings":
        //maybe might have to do: setSavingsData([...savingsData, currentSavings: event.target.value])
        setSavingsData({ ...savingsData, currentSavings: event.target.value });
        break;
      case "yearly-contribution":
        setSavingsData({ ...savingsData, yearlySavings: event.target.value });
        break;
      default:
    }

    //update parent component with new entered data
    props.onStartingInputFormChange(savingsData);
  }
  //user will input "Current Savings" & "Yearly Savings" number inputs, which will
  //then be required to be passed onto its parent components for further processing
  //rendering logic (JSX) goes here
  return (
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input
          type="number"
          id="current-savings"
          value={
            props.reset
              ? defaultInputValues
              : savingsData.currentSavings.toString()
          }
          min="0"
          onChange={inputChangeHandler}
          required
        />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input
          type="number"
          id="yearly-contribution"
          value={
            props.reset
              ? defaultInputValues
              : savingsData.yearlySavings.toString()
          }
          min="0"
          onChange={inputChangeHandler}
          required
        />
      </p>
    </div>
  );
}
