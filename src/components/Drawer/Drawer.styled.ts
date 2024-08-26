import styled from "styled-components";

interface DrawerStyleProps {
  $opendrawer: boolean;
}

export const Container = styled.div<DrawerStyleProps>`
  background-color: ${({ theme }) => theme.color.tertiary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-bottom: none;
  position: fixed;
  bottom: 0%;
  right: 10%;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  height: ${({ $opendrawer }) => ($opendrawer ? "auto" : "4rem")};
  transition: height 0.5s ease-in-out; /* Smooth animation */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
`;

export const Header = styled.h2`
  margin-bottom: 1rem;
`;

export const CartEmptyCopy = styled.p``;

export const List = styled.ul``;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

export const RemoveButton = styled.button``;

export const Total = styled.h3`
  margin-bottom: 1rem;
`;
