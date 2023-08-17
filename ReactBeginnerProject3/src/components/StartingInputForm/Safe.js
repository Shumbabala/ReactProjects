import { useState } from "react";

//import "./StartingInputForm.css";

export default function StartingInputForm(props) {
  //component object and variable declaration goes here
  const [savingsData, setSavingsData] = useState({
    currentSavings: NaN,
    yearlySavings: NaN,
  });
  //used to maintain state synchronization between parent components
  const [reset, setReset] = useState(false);
  //used for setting the visual value in input field
  const [aux, setAux] = useState(false);

  //triggered when reset was clicked
  if (props.reset != reset) {
    setSavingsData({ currentSavings: NaN, yearlySavings: NaN });
    setReset(props.reset);
    setAux(false);
  }

  //component logic goes here
  function inputChangeHandler(event) {
    switch (event.target.id) {
      case "current-savings":
        //maybe might have to do: setSavingsData([...savingsData, currentSavings: event.target.value])
        setSavingsData({
          ...savingsData,
          currentSavings: event.target.value,
        });
        break;
      case "yearly-contribution":
        setSavingsData({ ...savingsData, yearlySavings: event.target.value });
        break;
      default:
    }
    if ("" != event.target.value) {
      setAux(true);
    } else {
      setAux(false);
    }

    //update parent component (InvestmentInputForm.js) with new entered data
    props.onStartingInputFormChange(savingsData);
    //console.log(savingsData);
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
          /*shown value depends on "reset" parameter*/
          value={!aux ? 0 : savingsData.currentSavings}
          min="0"
          onChange={inputChangeHandler}
          onClick={() => setAux(true)}
          required
        />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input
          type="number"
          id="yearly-contribution"
          /*shown value depends on "reset" parameter*/
          value={!aux ? 0 : savingsData.yearlySavings}
          min="0"
          onChange={inputChangeHandler}
          onClick={() => setAux(true)}
          required
        />
      </p>
    </div>
  );
}
