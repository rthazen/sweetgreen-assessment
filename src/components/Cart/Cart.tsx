import React from "react";
import { useCart } from "../../state/CartContext";

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price.toFixed(2)}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${state.totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
