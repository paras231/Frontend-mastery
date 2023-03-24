import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

export const useStore = create((set) => ({
  votes: 2,
  increment: () => set((state) => ({ votes: state.votes + 1 })),
}));

// store user names
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

//? cart store add to cart feature->
// this store will keep all the cart data inside the localstorage (by deafult) using persist

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

// handle input state-> when page routing changes and we want to use the input data on other pages ,
// this store will keep the all input values inside the session storage using zustand persist

let inputStore = (set) => ({
  name: "",
  age: "",
  email: "",
  setName: (name) => set({ name }),
  setAge: (age) => set({ age }),
  setEmail: (email) => set({ email }),
});

inputStore = persist(inputStore, {
  name: "inputdata",
  getStorage: () => sessionStorage,
});

export const useInputStore = create(inputStore);

// lets create an store  which stores the hotels data and pass it to other componenrs->

let hotel = (set) => ({
  hotels: [],
  addHotel: (hotel) => {
    set((state) => ({
      hotels: [...state.hotels, hotel],
    }));
  },
});

hotel = persist(hotel, {
  name: "hotels",
  getStorage: () => sessionStorage,
});

export const hotelStore = create(hotel);

export const userStore = create((set) => ({
  fetchData: async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    set({ users: data });
  },
  name: "Paras SHarma",
}));

export const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

export const useToggleStore = create((set) => ({
  active: false,
  switchActive: () => set((state) => ({ active: !state.active })),
}));
