import React from "react";
import { useCart } from "../../state/CartContext";

const Checkout: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleCheckout = () => {
    // Simulate order submission
    dispatch({ type: "CLEAR_CART" });
    alert("Order placed successfully! Transaction ID: 12345");
  };

  return (
    <div>
      <h2>Checkout</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <button onClick={handleCheckout}>Submit Order</button>
      )}
    </div>
  );
};

export default Checkout;
