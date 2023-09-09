import { Fragment } from "react";

//css imports
import styles from "./Header.module.css";

//other imports
import image from "../../../assets/meals.jpg";

export default function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="a table topped with lots of food" />
      </div>
    </Fragment>
  );
}