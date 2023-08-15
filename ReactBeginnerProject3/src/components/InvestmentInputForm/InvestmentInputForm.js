//component css imports
import "./InvestmentInputForm.css";

//component imports
import StartingInputForm from "../StartingInputForm/StartingInputForm";
import InvestmentSpecsForm from "../InvestmentSpecsForm/InvestmentSpecsForm";
import { useState } from "react";

export default function InvestmentInputForm(props) {
  const [userInput, setUserInput] = useState({});

  //component logic goes here
  function StartingInputFormChangeHandler(startingInputData) {
    console.log(startingInputData);
    //add "Current Savings" & "Yearly Savings" values to "userInput" object props
    setUserInput({
      ...userInput,
      /*Current Savings*/ CS: startingInputData.currentSavings,
      /*Yearly Savings*/ YS: startingInputData.yearlySavings,
    });
  }

  function InvestmentSpecsFormChangeHandler(investmentInputData) {
    //add "ExpectedInterest" & "InvestmentDuration" values to "userInput" object props
    setUserInput({
      ...userInput,
      /*Expected Interest*/ EI: investmentInputData.expectedInterest,
      /*Investment Duration*/ ID: investmentInputData.investmentDuration,
    });
  }

  function resetButtonClickHandler() {
    //alert parent component (App.js) to switch reset value
    props.onReset();
  }

  function submitHandler(event) {
    event.preventDefault();
    props.onSubmit(userInput);
  }

  //rendering logic (JSX) goes here
  return (
    <form className="form" onSubmit={submitHandler}>
      <StartingInputForm
        onStartingInputFormChange={StartingInputFormChangeHandler}
        reset={props.currReset}
      />
      <InvestmentSpecsForm
        onInvestmentSpecsFormChange={InvestmentSpecsFormChangeHandler}
        reset={props.currReset}
      />
      <p className="actions">
        <button
          type="reset"
          className="buttonAlt"
          /*let's reset form info uppon click*/
          onClick={resetButtonClickHandler}
        >
          Reset
        </button>
        <button
          type="submit"
          className="button"
          /*when submitting we also
        want to reset form info*/
          onClick={resetButtonClickHandler}
        >
          Calculate
        </button>
      </p>
    </form>
  );
}
