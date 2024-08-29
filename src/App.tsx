import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global-style";
import { useCart } from "./state/CartContext";
import ItemList from "./components/ItemList/ItemList";
import Drawer from "./components/Drawer/Drawer";
import * as S from "./App.styled";

function App() {
  const { dispatch } = useCart();

  useEffect(() => {
    const grabbedState = localStorage.getItem("persistState");
    if (grabbedState) {
      const grabbedStateJSON = JSON.parse(grabbedState);
      if (grabbedStateJSON && grabbedStateJSON.cartToken) {
        dispatch({
          type: "LOAD_STATE",
          items: grabbedStateJSON.items || [],
          totalAmount: grabbedStateJSON.totalAmount || 0,
          checkout: grabbedStateJSON.checkout || false,
          cartToken: grabbedStateJSON.cartToken || null,
        });
      }
    }
  }, [dispatch]);

  return (
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
  );
}

export default App;
