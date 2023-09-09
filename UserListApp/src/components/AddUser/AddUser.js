import styles from "./AddUser.module.css";

import Button from "../Button/Button";
import Card from "../UI/Card";

import { useState, useRef } from "react";

export default function AddUser(props) {
  // Gneral Focus Hook
  const useFocus = () => {
    const htmlElRef = useRef(null);
    const setFocus = () => {
      htmlElRef.current && htmlElRef.current.focus();
    };

    return [htmlElRef, setFocus];
  };

  const [input1Ref, setInput1Focus] = useFocus();

  //input field value prop auxiliary state
  const [blank, setBlank] = useState(true);

  //user input state object
  const [userInput, setUserInput] = useState({});

  function inputChangeHandler(event) {
    if (blank) {
      setBlank(false);
    }
    let updatedUserInput;

    switch (event.target.name) {
      case "username":
        updatedUserInput = { ...userInput, username: event.target.value };
        break;
      case "age":
        updatedUserInput = { ...userInput, age: event.target.value };
        break;
      default:
        break;
    }

    setUserInput(updatedUserInput);

    //lift the state up
    props.onAddUserChange(updatedUserInput);
  }

  function onSubmit(event) {
    event.preventDefault();

    //warn component of submit button being clicked
    setBlank(true);
    //reset user input fields
    setUserInput({});
    //call parent component validation fucntion
    props.onUserAdd();
  }

  //maybe add an onClick prop to inputs
  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmit}>
        <div>
          {/*username field*/}
          <label htmlFor="username">
            Username
            <br />
            <input
              name="username"
              type="text"
              value={blank ? "" : userInput.username}
              onChange={inputChangeHandler}
              maxLength="50"
              ref={input1Ref}
              required
            ></input>
            <br />
          </label>
          {/*password field (maxLength attribute not working btw*/}
          <label htmlFor="age">
            Age
            <br />
            <input
              type="number"
              name="age"
              value={blank ? "" : userInput.password}
              onChange={inputChangeHandler}
              maxLength="3"
              required
            ></input>
            <br />
          </label>
        </div>
        <Button type="submit" clickHandler={setInput1Focus}>
          Add User
        </Button>
      </form>
    </Card>
  );
}
