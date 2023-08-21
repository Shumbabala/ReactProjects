import "./Table.css";

import { useState } from "react";
import styled from "styled-components";

const FallbackText = styled.h1`
  position: relative;
  text-align: center;
  padding: 10px 0;

  font-size: calc(1em + 1vw);
  white-space: nowrap;

  // background: linear-gradient( 92deg, #95d7e3, #eb76ff );
  background: -webkit-linear-gradient(92deg, #95d7e3, #eb76ff);
  background-size: 600vw 600vw;

  // make sure to put these after the background property
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textAnimate 5s linear infinite alternate;

  @keyframes textAnimate {
    from {
      filter: hue-rotate(0deg);
      background-position-x: 0%;
    }
    to {
      filter: hue-rotate(360deg);
      background-position-x: 600vw;
    }
  }
`;

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
      <FallbackText style={{ textAlign: "center" }}>
        Fill in the form to begin!
      </FallbackText>
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
