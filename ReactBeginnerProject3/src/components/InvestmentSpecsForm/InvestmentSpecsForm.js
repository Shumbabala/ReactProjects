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
    switch (event.target.id) {
      case "expected-return":
        //maybe might have to do: setInvestmentData([...investmentData, expectedInterest: event.target.value])
        setInvestmentData({
          ...investmentData,
          expectedInterest: event.target.value,
        });
        break;
      case "duration":
        setInvestmentData({
          ...investmentData,
          investmentDuration: event.target.value,
        });
        break;
      default:
    }
    if (!event.target.value) {
      setAux(false);
    } else {
      setAux(true);
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
          /*shown value depends on "reset" parameter*/
          value={!aux ? 0 : investmentData.expectedInterest}
          min="0"
          onChange={inputChangeHandler}
          onClick={() => setAux(true)}
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
          required
        />
      </p>
    </div>
  );
}
