import React from "react";
import { useCart } from "../../state/CartContext";
import Button from "../shared/Button";
import * as S from "./Cart.styled";

interface CartProps {
  openDrawer: boolean;
}

const Cart: React.FC<CartProps> = ({ openDrawer }) => {
  const { state, dispatch } = useCart();

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  return (
    <S.Container>
      <S.Header>
        Shopping Cart {openDrawer ? null : state.items.length}
      </S.Header>
      {state.items.length === 0 || !openDrawer ? null : (
        <>
          <S.List>
            {state.items.map((item) => (
              <S.ListItem key={item.id}>
                {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                <Button
                  version="secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </S.ListItem>
            ))}
          </S.List>
          <S.Total>Total: ${state.totalAmount.toFixed(2)}</S.Total>
        </>
      )}
    </S.Container>
  );
};

export default Cart;
