import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const App = () => {
  const { isLoading, data, error } = useQuery(
    "users",
    async () => {
      const { data } = await axios.get(
        "https://api.github.com/users/eunit99/repos"
      );
      return data;
    },
    {
      refetchInterval: 6000,
    }
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data?.map((user, index) => {
        return (
          <div key={index}>
            <span >{user.name}</span>
          </div>
        );
      })}
    </>
  );
};

export default App;
