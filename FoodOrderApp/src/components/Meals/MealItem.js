import styles from "./MealItem.module.css";

export default function MealItem(props) {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>Input form goes here (REMOVE)</div>
    </li>
  );
}
