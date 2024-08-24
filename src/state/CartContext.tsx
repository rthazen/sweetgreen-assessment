import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Types for cart items and actions
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; item: CartItem }
  | { type: "REMOVE_FROM_CART"; id: number }
  | { type: "CLEAR_CART" };

// Initial cart state
const initialCartState: CartState = {
  items: [],
  totalAmount: 0,
};

// Reducer function to handle cart actions
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingItem = state.items[existingItemIndex];

      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, { ...action.item, quantity: 1 }];
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.price,
      };
    case "REMOVE_FROM_CART":
      const itemToRemove = state.items.find((item) => item.id === action.id);
      if (!itemToRemove) return state;

      const updatedCartItems = state.items.filter(
        (item) => item.id !== action.id
      );

      return {
        ...state,
        items: updatedCartItems,
        totalAmount:
          state.totalAmount - itemToRemove.price * itemToRemove.quantity,
      };
    case "CLEAR_CART":
      return initialCartState;
    default:
      return state;
  }
}

// Create Context
const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialCartState,
  dispatch: () => null,
});

// CartProvider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
