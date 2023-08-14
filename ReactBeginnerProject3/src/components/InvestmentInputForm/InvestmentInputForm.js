//component css imports
import "./InvestmentInputForm.css";

//component imports
import StartingInputForm from "../StartingInputForm/StartingInputForm";
import { useState } from "react";

export default function InvestmentInputForm(props) {
  const [userInput, setUserInput] = useState({});
  const [reset, setReset] = useState(true);

  //component logic goes here
  function StartingInputFormChangeHandler(startingInputData) {
    //add "Current Savings" & "Yearly Savings" values to "userInput" object props
    setUserInput({
      ...userInput,
      CS: startingInputData.currentSavings,
      YS: startingInputData.yearlySavings,
    });
  }

  function InvestmentSpecsFormChangeHandler(investmentInputData) {
    //add "ExpectedInterest" & "InvestmentDuration" values to "userInput" object props
    setUserInput({
      ...userInput,
      EI: investmentInputData.expectedInterest,
      ID: investmentInputData.investmentDuration,
    });
  }

  function resetButtonClickHandler() {
    //change reset value to opposite value
    setReset((prevReset) => !prevReset);
  }

  //rendering logic (JSX) goes here
  return (
    <form className="form">
      <StartingInputForm
        onStartingInputFormChange={StartingInputFormChangeHandler}
        reset={reset}
      />
      <InvestmentSpecsForm
        onInvestmentSpecsFormChange={InvestmentSpecsFormChangeHandler}
      />
      <p className="actions">
        <button
          type="reset"
          className="buttonAlt"
          onClick={resetButtonClickHandler}
        >
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
