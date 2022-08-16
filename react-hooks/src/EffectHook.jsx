import React, { useState, useEffect } from "react";

const EffectHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 2000);
    // cleanup function
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <h1>I have rendered {count} times</h1>
    </>
  );
};

export default EffectHook;
