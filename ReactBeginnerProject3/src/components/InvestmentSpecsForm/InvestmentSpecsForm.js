import { useState } from "react";

//import "./InvestmentSpecsForm.css";

export default function InvestmentSpecsForm(props) {
  //component object and variable declaration goes here
  const [investmentData, setInvestmentData] = useState({
    expectedInterest: NaN,
    investmentDuration: NaN,
  });
  //used to maintain state synchronization between parent components
  const [reset, setReset] = useState(false);
  //used for setting the visual value in input field
  const [aux, setAux] = useState(false);

  //triggered when reset was clicked
  if (props.reset != reset) {
    setInvestmentData({ expectedInterest: NaN, investmentDuration: NaN });
    setReset(props.reset);
    setAux(false);
  }

  //component logic goes here
  function inputChangeHandler(event) {
    let updatedInvestmentData;

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
      case "expected-return":
        updatedInvestmentData = {
          ...investmentData,
          expectedInterest: newEventInput,
        };
        break;
      case "duration":
        updatedInvestmentData = {
          ...investmentData,
          investmentDuration: newEventInput,
        };
        break;
      default:
    }
    setInvestmentData(updatedInvestmentData);

    if ("" != newEventInput) {
      setAux(true);
    } else {
      setAux(false);
    }

    //update parent component with new entered data
    props.onInvestmentSpecsFormChange(updatedInvestmentData);
  }
  //component return JSX content goes here
  return (
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">Expected Interest (%, per year)</label>
        <input
          type="number"
          id="expected-return"
          /*shown value depends on "reset" parameter*/
          value={!aux ? 0 : investmentData.expectedInterest}
          min="0"
          onChange={inputChangeHandler}
          onClick={() => setAux(true)}
          style={
            props.missing
              ? { border: "1px solid red" }
              : { border: "1px solid #76c0ae" }
          }
          required
        />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input
          type="number"
          id="duration"
          /*shown value depends on "reset" parameter*/
          value={!aux ? 0 : investmentData.investmentDuration}
          min="0"
          onChange={inputChangeHandler}
          onClick={() => setAux(true)}
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
