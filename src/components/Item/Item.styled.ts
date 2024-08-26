import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-color: ${({ theme }) => theme.color.tertiary};
  margin: 0.5rem 0;
  padding: 0.7rem;
`;

export const LeftItem = styled.div``;

export const Header = styled.h3``;

export const ItemPrice = styled.p``;

export const ItemButton = styled.button``;
