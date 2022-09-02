import React, { useRef, useEffect } from "react";

const EventHandling = () => {
  // in this file i will learn about using event handlers in useEffect , and when and how to use them.
  //! 1. set useref and ref prop to element on which event is being added.
  //! 2. use current property of useRef.
  //! 3. use it inside useEffect hook .

  const ref = useRef(null);
  //? handeling onclick event listener->
  useEffect(() => {
    const handleClick = (event) => {
      ref.current.style.backgroundColor = "yellow";
      console.log("Button clicked");
    };
    const element = ref.current; // using current property to accessing the element.
    // adding event listener.
    element.addEventListener("click", handleClick);
    // return a cleanup function  to remove listener  -- important function
    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);
  //? handeling window event listener->
  useEffect(() => {
    const handleScroll = (e) => {
      console.log(
        "window scrolling",
        window.scrollTo({ top: 0, behavior: "smooth" })
      );
    };
    window.addEventListener("click", handleScroll);
    return () => {
      window.removeEventListener("click", handleScroll);
    };
  }, []);
  return (
    <>
      <button ref={ref}>Click Me</button>

      <div>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <button>Click to scroll</button>
      </div>
    </>
  );
};

export default EventHandling;
