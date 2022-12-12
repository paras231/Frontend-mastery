import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create((set) => ({
  votes: 2,
  increment: () => set((state) => ({ votes: state.votes + 1 })),
}));

let store = (set) => ({
  names: ["Paras", "deepak"],
  addName: (input) => {
    set((state) => ({
      names: [...state.names, input],
    }));
  },
});

store = persist(store, { name: "usernames" });

export const userInput = create(store);

let cartStore = (set) => ({
  // cart will be an array of products
  cart: [],
  addToCart: (id) =>
    set((state) => {
      // check if item exist in cart
      const isPresent = state.cart.find((product) => product.id === id);
      if (!isPresent) {
        return {
          ...state,
          cart: [...state.cart, { id, count: 1 }],
        };
      }
      const updateCart = state.cart.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      );
      return {
        ...state,
        cart: updateCart,
      };
    }),
  removeFromCart: (id) =>
    set((state) => {
      const isPresent = state.cart.findIndex((product) => product.id === id);

      if (isPresent === -1) {
        return {
          ...state,
        };
      }

      const updatedCart = state.cart
        .map((product) =>
          product.id === id
            ? { ...product, count: Math.max(product.count - 1, 0) }
            : product
        )
        .filter((product) => product.count);

      return {
        ...state,
        cart: updatedCart,
      };
    }),
});

cartStore = persist(cartStore, { name: "cart" });

export const userCart = create(cartStore);
