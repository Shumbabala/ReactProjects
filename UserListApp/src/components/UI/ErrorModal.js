import styles from "./ErrorModal.module.css";

//NOTE: props.clickHandler is a reference to App.js' modalSelfDestruct()
export default function ErrorModal(props) {
  <div>
    <div className={styles.backdrop} onClick={props.clickHandler} />
    <header className={styles.header}>
      <h2>{props.heading}</h2>
    </header>
    <main className={styles.content}>{props.content}</main>
    <footer className={styles.actions} clickHandler={props.clickHandler}>
      {props.children}
    </footer>
  </div>;
}
