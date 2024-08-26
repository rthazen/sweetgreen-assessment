import React from "react";
import { render, screen } from "@testing-library/react";
import ItemList from "../ItemList/ItemList";
import { CartProvider } from "../../state/CartContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

describe("ItemList Component", () => {
  it("renders all items correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <CartProvider>
          <ItemList />
        </CartProvider>
      </ThemeProvider>
    );

    expect(screen.getByText(/Items for Sale/i)).toBeInTheDocument();
    for (let i = 1; i <= 12; i++) {
      expect(screen.getByText(`Item ${i}`)).toBeInTheDocument();
    }
  });

  it("renders the correct price for each item", () => {
    render(
      <ThemeProvider theme={theme}>
        <CartProvider>
          <ItemList />
        </CartProvider>
      </ThemeProvider>
    );

    const prices = screen.getAllByText(/Price: \$/i);

    // Assert the number of price elements matches the number of items
    expect(prices.length).toBe(12); // There are 12 items

    // Check the specific prices
    expect(prices.map((price) => price.textContent)).toEqual([
      "Price: $29.99",
      "Price: $49.99",
      "Price: $19.99",
      "Price: $99.99",
      "Price: $29.99",
      "Price: $49.99",
      "Price: $19.99",
      "Price: $99.99",
      "Price: $29.99",
      "Price: $49.99",
      "Price: $19.99",
      "Price: $99.99",
    ]);
  });

  it("renders the Add to Cart button for each item", () => {
    render(
      <ThemeProvider theme={theme}>
        <CartProvider>
          <ItemList />
        </CartProvider>
      </ThemeProvider>
    );

    const buttons = screen.getAllByRole("button", { name: /Add to Cart/i });

    // Check if the correct number of buttons is rendered
    expect(buttons.length).toBe(12);
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});
