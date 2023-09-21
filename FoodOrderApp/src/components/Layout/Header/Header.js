import { Fragment, useContext } from "react";

//css imports
import styles from "./Header.module.css";

//other imports
import image from "../../../assets/meals.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import MealsContext from "../../Contexts/meals-context";

export default function Header(props) {
  const context = useContext(MealsContext);

  //number of cart items computation
  const amount = context.items.reduce(
    (currentAmount, item) => currentAmount + item.amount,
    0
  );

  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton clickHandler={props.clickHandler} amount={amount} />
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="a table topped with lots of food" />
      </div>
    </Fragment>
  );
}
