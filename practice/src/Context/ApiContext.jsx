import { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";

const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
    const [loading,setLoading] = useState(true);
//  fetch data

const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
  };

  useEffect(()=>{

  },[])


  return <ApiContext.Provider>{children}</ApiContext.Provider>;
};


