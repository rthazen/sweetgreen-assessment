import React, { useState } from "react";
import { useCart } from "../../state/CartContext"; // Import the context to access state
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import * as S from "./Drawer.styled";

const Drawer: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { state } = useCart(); // Get the state from the context

  const handleClick = () => {
    // Only toggle the drawer if there are items in the cart
    if (state.items.length > 0) {
      setOpenDrawer((prev) => !prev);
    }
  };

  return (
    <S.Container onClick={handleClick} $opendrawer={openDrawer}>
      <Cart openDrawer={openDrawer} />
      <Checkout openDrawer={openDrawer} />
    </S.Container>
  );
};

export default Drawer;
