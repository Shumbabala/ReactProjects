import { useState } from "react";

//import "./StartingInputForm.css";

export default function StartingInputForm(props) {
  //component object and variable declaration goes here
  const [savingsData, setSavingsData] = useState({
    currentSavings: NaN,
    yearlySavings: NaN,
  });
  //used to maintain state synchronization between parent components
  //(only used to tell whether reset button has been clicked)
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
  //when "event.target.value" has a leading 0, remove it first, then update
  function inputChangeHandler(event) {
    let updatedSavingsData;

    //variables to allow for input form syntax checking
    const eventInput = event.target.value;
    let newEventInput = "";

    //application bugs
    if (eventInput.charAt(0) === "0") {
      newEventInput = eventInput.slice(1);
    } else {
      newEventInput = eventInput;
    }

    switch (event.target.id) {
      case "current-savings":
        updatedSavingsData = {
          ...savingsData,
          currentSavings: newEventInput,
        };
        break;
      case "yearly-contribution":
        updatedSavingsData = {
          ...savingsData,
          yearlySavings: newEventInput,
        };
        break;
      default:
        break;
    }
    setSavingsData(updatedSavingsData);

    if ("" != newEventInput) {
      setAux(true);
    } else {
      setAux(false);
    }

    props.onStartingInputFormChange(updatedSavingsData);
  }
  console.log(props.missing);
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
          /*shown value depends on "aux" parameter*/
          value={!aux ? 0 : savingsData.currentSavings}
          min="0"
          onChange={inputChangeHandler}
          onClick={() => setAux(true)}
          /*missing input field validation*/
          style={
            props.missing
              ? { border: "1px solid red" }
              : { border: "1px solid #76c0ae" }
          }
          required
        />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input
          type="number"
          id="yearly-contribution"
          /*shown value depends on "aux" parameter*/
          value={!aux ? 0 : savingsData.yearlySavings}
          min="0"
          onChange={inputChangeHandler}
          onClick={() => setAux(true)}
          /*missing input field validation*/
          style={
            props.missing
              ? { border: "1px solid red" }
              : { border: "1px solid #76c0ae" }
          }
          required
        />
      </p>
    </div>
  );
}
