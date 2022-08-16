import React, { useRef, useEffect } from "react";

const RefHook = () => {
  const btnRef = useRef(null);

  const handleClick = () => {
    btnRef.current.style.backgroundColor = "red";
  };

  useEffect(() => {});
  return (
    <>
      <button ref={btnRef} onClick={handleClick}>
        Click me
      </button>
    </>
  );
};

export default RefHook;
