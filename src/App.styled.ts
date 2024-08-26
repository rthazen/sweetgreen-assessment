import styled from "styled-components";

export const AppContainer = styled.div`
  height: auto;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  margin: 2rem 0;

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

export const Header = styled.h1``;
