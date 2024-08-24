import React from "react";
import { CartProvider } from "./state/CartContext";
import ItemList from "./components/ItemList/ItemList";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>My Sweetgreen E-Commerce App</h1>
        <ItemList />
        <Cart />
        <Checkout />
      </div>
    </CartProvider>
  );
}

export default App;
