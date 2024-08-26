import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { CartProvider } from "./state/CartContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

describe("App Component", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    );

    expect(
      screen.getByText(/My Sweetgreen E-Commerce App/i)
    ).toBeInTheDocument();
  });
});
