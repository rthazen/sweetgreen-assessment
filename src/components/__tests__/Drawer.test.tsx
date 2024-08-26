import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Drawer from "../Drawer/Drawer";
import { CartProvider, useCart } from "../../state/CartContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

// Mock the useCart hook
jest.mock("../../state/CartContext", () => ({
  ...jest.requireActual("../../state/CartContext"),
  useCart: jest.fn(),
}));

test("toggles openDrawer state when clicked and there are items in the cart", () => {
  const mockDispatch = jest.fn();
  (useCart as jest.Mock).mockReturnValue({
    state: {
      items: [{ id: 1, name: "Test Item", price: 10.0, quantity: 1 }], // Ensure price is correctly set
      totalAmount: 10.0,
    },
    dispatch: mockDispatch,
    setCheckout: jest.fn(),
  });

  render(
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Drawer />
      </CartProvider>
    </ThemeProvider>
  );

  // Ensure that "Submit Order" button does not appear initially
  expect(screen.queryByText(/Submit Order/i)).toBeNull();

  // Click to open the drawer
  fireEvent.click(screen.getByText(/Shopping Cart/i));

  // Ensure that "Submit Order" button appears after opening the drawer
  expect(screen.getByText(/Submit Order/i)).toBeInTheDocument();
});
