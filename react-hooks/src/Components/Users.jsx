import React from "react";
import { userdata } from "./data";
import "./Users.css";
const Users = () => {
  const [selectUser, setSelectUser] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const selectNewUser = (id) => {
    console.log(id, "clicked");
    setSelectUser(!selectUser);
    setSelected(
      userdata.filter((user) => {
        return user.id === id;
      })
    );
  };
console.log(selected.map(i=>i.name).map(j=>j));
  return (
    <>
      {userdata.map((i) => {
        return (
          <>
            <div
              key={i.id}
              style={{ display: "flex", gap: "1vmax", flexWrap: "wrap" }}
            >
              <img
                onClick={() => selectNewUser(i.id)}
                style={{ with: "10vmax", height: "20vmax" }}
                src={i.image}
                alt="beautiful"
              />
            </div>
           
          </>
        );
      })}
       {
                selectUser? selected.map((user)=>{
                    <div>
                        <h1>{user.name}</h1>
                    </div>
                })
                :null
            }
    </>
  );
};

export default Users;
