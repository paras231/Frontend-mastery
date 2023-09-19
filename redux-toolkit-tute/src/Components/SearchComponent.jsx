import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../Redux/searchSlice";
const SearchComponent = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state);
  console.log(search);
  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search here"
        value={search.query}
        onChange={handleChange}
      />
      {search?.keywords?.map((val, idx) => {
        return <span key={idx}>{val}</span>;
      })}
    </>
  );
};

export default SearchComponent;
