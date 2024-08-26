import React from "react";
import { render } from "@testing-library/react";
import Checkout from "../Checkout/Checkout";
import { CartProvider } from "../../state/CartContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

test("renders Checkout component", () => {
  render(
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Checkout openDrawer={true} />
      </CartProvider>
    </ThemeProvider>
  );
});
