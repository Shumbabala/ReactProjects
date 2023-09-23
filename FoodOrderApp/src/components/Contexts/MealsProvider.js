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
      let totalAmount;
      if (index !== -1) {
        //newItems[index].amount += action.item.amount;
        newItems[index].amount += 1;
        totalAmount = state.totalAmount + action.item.price;
      } else {
        newItems = state.items.concat(action.item);
        totalAmount =
          state.totalAmount + action.item.amount * action.item.price;
      }
      return {
        items: newItems,
        totalAmount: totalAmount,
      };
    case "REMOVE":
      //check whether the item being removed exists in enough quantity
      index = state.items.findIndex((item) => item.id === action.id);
      const price = newItems[index].price;
      if (newItems[index].amount - 1 > 0) {
        //update state accordingly (only update amount field)
        newItems[index].amount -= 1;
      } else {
        newItems = newItems.filter((item) => item.id !== action.id);
      }
      return { items: newItems, totalAmount: state.totalAmount - price };
    //case where user wishes to completely remove item from cart
    case "ERASE":
      newItems = newItems.filter((item) => item.id !== action.id);
      const erasedItem = state.items((item) => item.id === action.id);
      return {
        items: newItems,
        totalAmount: state.totalAmount - erasedItem.price * erasedItem.amount,
      };
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

  function deleteItemFromCartHandler(id) {
    dispatchReducer({ type: "ERASE", id: id });
  }

  const mealsContext = {
    items: mealsState.items,
    totalAmount: mealsState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };
  console.log(mealsContext.items);

  return (
    <MealsContext.Provider value={mealsContext}>
      {props.children}
    </MealsContext.Provider>
  );
}
