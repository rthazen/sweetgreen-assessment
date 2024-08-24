import React from "react";
import Item from "../Item/Item";

// Mock data for the items
const items = [
  { id: 1, name: "Item 1", price: 29.99 },
  { id: 2, name: "Item 2", price: 49.99 },
  { id: 3, name: "Item 3", price: 19.99 },
  { id: 4, name: "Item 4", price: 99.99 },
];

const ItemList: React.FC = () => {
  return (
    <div>
      <h2>Items for Sale</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
