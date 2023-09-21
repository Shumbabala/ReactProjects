import { Fragment, useState } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import MealsProvider from "./components/Contexts/MealsProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <MealsProvider>
      <Header clickHandler={() => setShowCart(true)} />
      <Meals />
      {showCart &&
        ReactDOM.createPortal(
          <Cart onClick={() => setShowCart(false)} />,
          document.getElementById("overlays")
        )}
    </MealsProvider>
  );
}

export default App;
