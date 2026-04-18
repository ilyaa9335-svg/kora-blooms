"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { CartState, CartAction, CartItem } from "@/types";

const CART_KEY = "kora-blooms-cart";

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.slug === action.payload.slug);
      let newItems: CartItem[];
      if (existing) {
        newItems = state.items.map((i) =>
          i.slug === action.payload.slug
            ? { ...i, quantity: i.quantity + action.payload.quantity }
            : i
        );
      } else {
        newItems = [...state.items, action.payload];
      }
      return computeTotals({ ...state, items: newItems });
    }
    case "REMOVE_ITEM": {
      const newItems = state.items.filter((i) => i.slug !== action.payload.slug);
      return computeTotals({ ...state, items: newItems });
    }
    case "UPDATE_QUANTITY": {
      if (action.payload.quantity <= 0) {
        const newItems = state.items.filter((i) => i.slug !== action.payload.slug);
        return computeTotals({ ...state, items: newItems });
      }
      const newItems = state.items.map((i) =>
        i.slug === action.payload.slug
          ? { ...i, quantity: action.payload.quantity }
          : i
      );
      return computeTotals({ ...state, items: newItems });
    }
    case "CLEAR_CART":
      return { items: [], total: 0, count: 0 };
    case "LOAD_CART":
      return computeTotals({ ...state, items: action.payload });
    default:
      return state;
  }
}

function computeTotals(state: CartState): CartState {
  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const count = state.items.reduce((sum, item) => sum + item.quantity, 0);
  return { ...state, total, count };
}

const initialState: CartState = { items: [], total: 0, count: 0 };

interface CartContextType {
  state: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) {
        const items: CartItem[] = JSON.parse(saved);
        dispatch({ type: "LOAD_CART", payload: items });
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(state.items));
    } catch {
      // ignore
    }
  }, [state.items]);

  const addItem = useCallback((item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  }, []);

  const removeItem = useCallback((slug: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { slug } });
  }, []);

  const updateQuantity = useCallback((slug: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { slug, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
