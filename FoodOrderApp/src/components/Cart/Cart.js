//component responsible for holding all the Cart items
import { Fragment, useContext } from "react";
import styles from "./Cart.module.css";

//other imports
import CartItem from "./CartItem";
import mealsContext from "../Contexts/meals-context";

/*CartItem needs to receive Item name and amount of it
also allow for adding and subtracting amounts*/
export default function Cart(props) {
  const context = useContext(mealsContext);

  //context destructuring
  const { totalAmount, items, addItem, removeItem, deleteItem } = context;
  const totalAmountInteger = +totalAmount.toFixed(2);

  const totalAmountInt = `$${totalAmountInteger}`;
  const { name } = items[0];
  console.log(name);

  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.onClick} />
      <div className={styles.modal}>
        <ul>
          {items.map((item) => (
            <CartItem
              name={item.name}
              price={item.price}
              amount={item.amount}
              key={item.id}
              onAdd={addItem.bind(null, item)}
              onRemove={removeItem.bind(null, item.id)}
              onDelete={deleteItem.bind(null, item.id)}
            />
          ))}
        </ul>
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{totalAmountInt}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClick}>
            Close
          </button>
          {totalAmount !== 0 && (
            <button className={styles.button}>Order</button>
          )}
        </div>
      </div>
    </Fragment>
  );
}
