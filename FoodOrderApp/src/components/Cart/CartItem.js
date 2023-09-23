import classes from "./CartItem.module.css";

const CartItem = (props) => {
  let priceFixed = +props.price;
  priceFixed = priceFixed.toFixed(2);
  const price = `$${priceFixed}`;

  return (
    <li className={classes["cart-item"]} key={props.key}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onDelete}>REMOVE</button>
      </div>
    </li>
  );
};

export default CartItem;
