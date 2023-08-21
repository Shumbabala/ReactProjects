import logo from "./assets/investment-calculator-logo.png";

import InvestmentInputForm from "./components/InvestmentInputForm/InvestmentInputForm";
import Table from "./components/Table/Table";
import { useState } from "react";

function App() {
  const [reset, setReset] = useState(false);
  const [calculate, setCalculate] = useState(false);
  const [yearly_Data, setYearly_Data] = useState([]);

  const calculateHandler = (userInput) => {
    console.log(userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["CS"]; // feel free to change the shape of this input object!
    let totalInterest = 0;
    let investedCapital = currentSavings;
    const yearlyContribution = +userInput["YS"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["EI"] / 100;
    const duration = +userInput["ID"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital += yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: parseFloat(yearlyInterest).toFixed(2),
        savingsEndOfYear: parseFloat(currentSavings).toFixed(2),
        investedCapital: parseFloat(investedCapital).toFixed(2),
        totalInterest: parseFloat(totalInterest).toFixed(2),
      });
    }
    //update state
    setCalculate(true);
    setYearly_Data(yearlyData);
    // now we must pass our updated yearlyData object array to our output rendered JSX
  };

  function resetHandler() {
    setReset((prevReset) => !prevReset);
    setCalculate(false);
  }
  return (
    <div>
      {/*you can componentize this code (header component), but hardcoding it is fine*/}
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      {/*InvestmentInputForm component here*/}
      <InvestmentInputForm
        onSubmit={calculateHandler}
        onReset={resetHandler}
        currReset={reset}
      />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table renderableData={yearly_Data} calculate={calculate} />
    </div>
  );
}

export default App;
