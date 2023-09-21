//css imports
import { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const inputRef = useRef(null);

  const [valid, setValid] = useState(true);

  function submitHandler(event) {
    event.preventDefault();

    const value = +inputRef.current.value;
    //validation
    if (value === 0) {
      setValid(false);
      return;
    } else {
      setValid(true);
    }
    props.onFormSubmission(value);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor={props.id}>Amount</label>
      <input
        {...props}
        ref={inputRef}
        step={props.step}
        defaultValue={props.defaultValue}
      ></input>
      <button>+</button>
      {!valid && <p>Please enter a valid amount ({">"}0)</p>}
    </form>
  );
}
