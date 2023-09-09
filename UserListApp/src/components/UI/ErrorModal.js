import styles from "./ErrorModal.module.css";

import Card from "./Card";

//NOTE: props.clickHandler is a reference to App.js' modalSelfDestruct()
export default function ErrorModal(props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.clickHandler} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.heading}</h2>
        </header>
        <main className={styles.content}>{props.content}</main>
        <footer className={styles.actions}>{props.children}</footer>
      </Card>
    </div>
  );
}
