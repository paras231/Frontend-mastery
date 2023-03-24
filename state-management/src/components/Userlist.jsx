import React from "react";
import { userStore, useToggleStore } from "./state";

const Userlist = () => {
  const fetchData = userStore((state) => state.fetchData);
  const users = userStore((state) => state.users);
  React.useEffect(() => {
    fetchData();
  }, []);

  const active = useToggleStore((state) => state.active);

  const switchActive = useToggleStore((state) => state.switchActive);

  return (
    <>
      <h3>userlist</h3>
      {users?.map((user) => {
        return (
          <div key={user.id}>
            <span>{user.name}</span>
          </div>
        );
      })}
      {active ? <h3>User is active</h3> : <h3>User offline</h3>}
      <button onClick={switchActive}>Toggle</button>
    </>
  );
};

export default Userlist;
