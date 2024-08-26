import React from "react";
import { render, screen } from "@testing-library/react";
import { CartProvider } from "../../state/CartContext";
import Item from "../Item/Item";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

describe("Item Component", () => {
  const mockItem = { id: 1, name: "Test Item", price: 29.99 };

  it("renders the item name", () => {
    render(
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Item id={mockItem.id} name={mockItem.name} price={mockItem.price} />
        </CartProvider>
      </ThemeProvider>
    );

    expect(screen.getByText(/Test Item/i)).toBeInTheDocument();
  });

  it("renders the item price", () => {
    render(
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Item id={mockItem.id} name={mockItem.name} price={mockItem.price} />
        </CartProvider>
      </ThemeProvider>
    );

    expect(screen.getByText(/Price: \$29.99/i)).toBeInTheDocument();
  });

  it("renders the Add to Cart button", () => {
    render(
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Item id={mockItem.id} name={mockItem.name} price={mockItem.price} />
        </CartProvider>
      </ThemeProvider>
    );

    expect(screen.getByText(/Add to Cart/i)).toBeInTheDocument();
  });
});
