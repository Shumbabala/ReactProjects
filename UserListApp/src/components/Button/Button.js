import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button
      className={styles.button}
      type={props.type}
      onClick={props.clickHandler || ""}
    >
      {props.children}
    </button>
  );
}
