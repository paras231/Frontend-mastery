import React from "react";
import { products } from "./data";
import { userCart } from "./state";

const Products = () => {
  const cart = userCart((state) => state.cart);
  const addToCart = userCart((state) => state.addToCart);
  const removeFromCart = userCart((state) => state.removeFromCart);
  //   const productsInCart = cart.find(product=>product.id===id)
  const cartValue = cart.reduce((prev, current) => prev + current.count, 0);
  console.log(cart);
  const totalCost = cart.reduce((prev, current) => {
    const product = products.find((f) => f.id === current.id);

    const productCost = product.price * current.count;

    return prev + productCost;
  }, 0);
  return (
    <>
      <h3>{cartValue}</h3>
      <span>cost:{totalCost}</span>
      {products.map((product) => {
        return (
          <>
            <div
              style={{
                display: "flex",
                padding: "10px",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <h4>{product.name}</h4>
              <span>{product.price}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "20vmax",
              }}
            >
              <button onClick={() => addToCart(product.id)}>+</button>
              <span></span>
              <button onClick={() => removeFromCart(product.id)}>-</button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Products;
