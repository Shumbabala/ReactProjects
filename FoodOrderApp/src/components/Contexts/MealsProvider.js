//context imports
import MealsContext from "./meals-context";

//hook imports
import { useReducer } from "react";

function mealReducer(state, action) {
  let newItems = [...state.items];
  switch (action.type) {
    case "ADD":
      //check whether the action.item.id already exists in state
      let index = state.items.findIndex((item) => item.id === action.item.id);
      if (index !== -1) {
        newItems[index].amount += action.item.amount;
      } else {
        newItems = state.items.concat(action.item);
      }
      return {
        items: newItems,
        totalAmount: state.totalAmount + action.item.price * action.item.amount,
      };
    case "REMOVE":
      //check whether the item being removed exists in enough quantity
      index = state.items.findIndex((item) => item.id === action.id);
      newItems = [...state.items];
      const price = newItems[index].price;
      if (newItems[index].amount - 1 > 0) {
        //update state accordingly (only update amount field)
        newItems[index].amount -= 1;
      } else {
        newItems = newItems.filter((item) => item.id !== action.id);
      }
      return { items: newItems, totalAmount: state.totalAmount - price };
    default:
      return;
  }
}

export default function MealsProvider(props) {
  //state declarations
  const [mealsState, dispatchReducer] = useReducer(mealReducer, {
    items: [],
    totalAmount: 0,
  });

  //handler logic
  function addItemToCartHandler(item) {
    dispatchReducer({ type: "ADD", item: item });
  }

  function removeItemFromCartHandler(id) {
    dispatchReducer({ type: "REMOVE", id: id });
  }

  const mealsContext = {
    items: mealsState.items,
    totalAmount: mealsState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <MealsContext.Provider value={mealsContext}>
      {props.children}
    </MealsContext.Provider>
  );
}
