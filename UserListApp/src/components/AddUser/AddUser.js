import styles from "./AddUser.module.css";

import Button from "../Button/Button";

import { useState } from "react";

export default function AddUser(props) {
  //input field value prop auxiliary state
  const [blank, setBlank] = useState(true);

  //user input state object
  const [userInput, setUserInput] = useState({});

  //if "Add User" button was clicked (passed from parent (App.js))
  if (props.UserAdded) {
    setBlank(true);
    //reset object
    setUserInput({});
  }

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

  //maybe add an onClick prop to inputs
  return (
    <form className={styles.input} onSubmit={props.onUserAdd}>
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
            required
          ></input>
          <br />
        </label>
        {/*password field*/}
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
      <Button type="submit">Add User</Button>
    </form>
  );
}
