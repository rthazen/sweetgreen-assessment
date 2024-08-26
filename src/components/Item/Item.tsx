import React from "react";
import { useCart } from "../../state/CartContext";
import Button from "../shared/Button";
import * as S from "./Item.styled";

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
    <S.Container>
      <S.LeftItem>
        <S.Header>{name}</S.Header>
        <S.ItemPrice>Price: ${price.toFixed(2)}</S.ItemPrice>
      </S.LeftItem>

      <Button onClick={addToCart}>Add to Cart</Button>
    </S.Container>
  );
};

export default Item;
