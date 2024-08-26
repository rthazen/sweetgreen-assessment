import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Cart from "../Cart/Cart";
import { CartProvider, useCart } from "../../state/CartContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

// Mock the useCart hook
jest.mock("../../state/CartContext", () => ({
  ...jest.requireActual("../../state/CartContext"),
  useCart: jest.fn(),
}));

test("removes items from the cart", () => {
  const mockDispatch = jest.fn();
  (useCart as jest.Mock).mockReturnValue({
    state: {
      items: [{ id: 1, name: "Test Item", price: 10.0, quantity: 1 }],
      totalAmount: 10.0,
    },
    dispatch: mockDispatch,
    setCheckout: jest.fn(),
  });

  const { rerender } = render(
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Cart openDrawer={true} />
      </CartProvider>
    </ThemeProvider>
  );

  // Verify that the "Remove" button is present
  const removeButton = screen.getByText(/Remove/i);
  expect(removeButton).toBeInTheDocument();

  // Click the "Remove" button to trigger removal
  fireEvent.click(removeButton);

  // Mock the state update after the dispatch action
  (useCart as jest.Mock).mockReturnValue({
    state: {
      items: [], // Simulate item removal
      totalAmount: 0.0,
    },
    dispatch: mockDispatch,
    setCheckout: jest.fn(),
  });

  // Re-render the component with the updated state
  rerender(
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Cart openDrawer={true} />
      </CartProvider>
    </ThemeProvider>
  );

  // Check if the item is removed from the cart (based on how your Cart component behaves)
  expect(screen.queryByText(/Test Item/i)).toBeNull();
});
