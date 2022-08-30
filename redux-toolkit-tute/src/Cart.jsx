import React from "react";
import { data } from "./data";

const Cart = () => {
  const [value, setValue] = React.useState(0);
  const handleAdd = () => {
    setValue(value + 1);
  };
  return (
    <>
      {data.map((i) => {
        return (
          <div style={{ display: "flex", gap: "1vmax" }} key={i.id}>
            <p>{i.name}</p>
            <p>{i.price}</p>
            <button
              style={{ height: "2vmax", width: "2vmax", marginTop: "1vmax" }}
              onClick={handleAdd}
            >
              +
            </button>
          </div>
        );
      })}
      <span>{value}</span>
    </>
  );
};

export default Cart;
