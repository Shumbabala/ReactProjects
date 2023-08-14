import { useState } from "react";

import "./InvestmentSpecsForm.css";

export default function InvestmentSpecsForm(props) {
  //component object and variable declaration goes here
  const [investmentData, setInvestmentData] = useState({
    expectedInterest: 0,
    investmentDuration: 0,
  });
  const defaultInputValues = "(Amount >0)";

  //component logic goes here
  function inputChangeHandler(event) {
    switch (event.target.id) {
      case "expected-return":
        //maybe might have to do: setInvestmentData([...investmentData, expectedInterest: event.target.value])
        setInvestmentData({ ...investmentData, expectedInterest: event.target.value });
        break;
      case "duration":
        setInvestmentData({ ...investmentData, investmentDuration: event.target.value });
        break;
      default:
    }

    //update parent component with new entered data
    props.onInvestmentSpecsFormChange(investmentData);
  }
  //component return JSX content goes here
  return (
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">Expected Interest (%, per year)</label>
        <input
          type="number"
          id="expected-return"
          value={
            props.reset
              ? defaultInputValues
              : investmentData.expectedInterest.toString()
          }
          min="0"
          onChange={inputChangeHandler}
          required
        />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input
          type="number"
          id="duration"
          value={
            props.reset
              ? defaultInputValues
              : investmentData.expectedInterest.toString()
          }
          min="0"
          onChange={inputChangeHandler}
          required
        />
      </p>
    </div>
  );
}
