import React, { useState } from "react";
import { useCart } from "../../state/CartContext";
import Modal from "../Modal/Modal";
import Button from "../shared/Button";
import * as S from "./Checkout.styled";

interface CheckoutProps {
  openDrawer: boolean;
}

const Checkout: React.FC<CheckoutProps> = ({ openDrawer }) => {
  const { state, dispatch, setCheckout } = useCart();
  const [transactionID, setTransactionID] = useState<number | null>(null);

  const handleCheckout = () => {
    const randomID =
      Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000;

    // Simulate order submission
    dispatch({ type: "CLEAR_CART" });
    setTransactionID(randomID);
    setCheckout(true);
  };

  const closeModal = () => {
    setCheckout(false);
    setTransactionID(null);
  };

  return (
    <S.Container>
      {state.items.length === 0
        ? null
        : openDrawer && <Button onClick={handleCheckout}>Submit Order</Button>}
      {transactionID !== null && state.checkout && (
        <Modal
          show={state.checkout}
          onClose={closeModal}
          transactionID={transactionID}
        />
      )}
    </S.Container>
  );
};

export default Checkout;
