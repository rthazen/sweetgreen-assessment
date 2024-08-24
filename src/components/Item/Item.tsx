import React from "react";
import { useCart } from "../../state/CartContext";

interface ItemProps {
  id: number;
  name: string;
  price: number;
}

const Item: React.FC<ItemProps> = ({ id, name, price }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", item: { id, name, price, quantity: 1 } });
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Item;
