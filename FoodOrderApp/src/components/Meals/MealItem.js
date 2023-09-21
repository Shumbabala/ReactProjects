import styles from "./MealItem.module.css";

//component imports
import MealItemForm from "./MealItemForm";
import mealsContext from "../Contexts/meals-context";

//hook imports
import { useContext } from "react";

function MealItem(props) {
  const context = useContext(mealsContext);

  function formSubmissionHandler(value) {
    context.addItem({
      id: props.id,
      name: props.name,
      amount: value,
      price: props.price,
    });
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <MealItemForm
        onFormSubmission={formSubmissionHandler}
        id={props.id}
        step={props.step}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
      />
    </li>
  );
}

export default MealItem;
