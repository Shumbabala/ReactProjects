import "./Table.css";

import { useState } from "react";

//this component needs to render all the rows containing the appropriate investment details for every year
//otherwise render a msg alerting the user of "missing information" (if nothing has been submitted yet)
export default function Table(props) {
  //used to maintain state synchronization between parent components
  const [reset, setReset] = useState(false);

  //component logic here
  //if props.reset is true, the user has clicked "Reset", therefore we must render an empty table (show empty msg)
  if (!props.calculate) {
    return (
      /*h1 tags are not mandatory, open to alternatives*/
      <h1 style={{ textAlign: "center" }}>Fill in the form to begin!</h1>
    );
  }
  /*JSX content here
    /*must create table component -> conditionally renders table components*/
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.renderableData.map((yearBlock) => (
          <tr>
            <td>{yearBlock.year}</td>
            <td>{yearBlock.savingsEndOfYear}</td>
            <td>{yearBlock.yearlyInterest}</td>
            <td>{yearBlock.totalInterest}</td>
            <td>{yearBlock.investedCapital}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
