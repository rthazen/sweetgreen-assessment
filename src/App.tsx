import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global-style";
import { CartProvider } from "./state/CartContext";
import ItemList from "./components/ItemList/ItemList";
import Drawer from "./components/Drawer/Drawer";
import * as S from "./App.styled";

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <S.AppContainer>
          <S.AppWrapper>
            <S.Content>
              <S.Header>My Sweetgreen E-Commerce App</S.Header>
              <ItemList />
            </S.Content>
          </S.AppWrapper>
          <Drawer />
        </S.AppContainer>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
