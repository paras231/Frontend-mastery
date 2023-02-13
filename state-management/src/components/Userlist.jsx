import React from "react";
import { userStore } from "./state";


const Userlist = () => {
  const fetchData = userStore((state) => state.fetchData);
  const users = userStore((state) => state.users);
  React.useEffect(() => {
    fetchData();
  }, []);
  if (!users) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <h3>userlist</h3>
      {users?.map((user) => {
        return (
          <>
            <span>{user.id}</span>
          </>
        );
      })}
    </>
  );
};

export default Userlist;
