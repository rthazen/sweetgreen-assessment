import React from "react";
import Item from "../Item/Item";
import * as S from "./ItemList.styled";

// Mock data for the items
const items = [
  { id: 1, name: "Item 1", price: 29.99 },
  { id: 2, name: "Item 2", price: 49.99 },
  { id: 3, name: "Item 3", price: 19.99 },
  { id: 4, name: "Item 4", price: 99.99 },
  { id: 5, name: "Item 5", price: 29.99 },
  { id: 6, name: "Item 6", price: 49.99 },
  { id: 7, name: "Item 7", price: 19.99 },
  { id: 8, name: "Item 8", price: 99.99 },
  { id: 9, name: "Item 9", price: 29.99 },
  { id: 10, name: "Item 10", price: 49.99 },
  { id: 11, name: "Item 11", price: 19.99 },
  { id: 12, name: "Item 12", price: 99.99 },
];

const ItemList: React.FC = () => {
  return (
    <S.Container>
      <S.Header>Items for Sale</S.Header>
      <S.ItemWrapper>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </S.ItemWrapper>
    </S.Container>
  );
};

export default ItemList;
