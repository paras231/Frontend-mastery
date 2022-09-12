import React from "react";
import useWindowScroll from "beautiful-react-hooks/useWindowScroll";

const Header = () => {
  return (
    <>
      <h1>hellow world</h1>
    </>
  );
};
//? this hook concept can be used when we want to hide or show something on window scroll.
const WIndowscroll = () => {
  const [scrollY, setScrollY] = React.useState(window.scrollY);
  const onWindowScroll = useWindowScroll();
  onWindowScroll((event) => {
    setScrollY(window.scrollY);
  });
console.log(scrollY);
  return (
    <>
      {scrollY === 100 ? (
       document.body.style.backgroundColor="red"
      ) : (
       
        document.body.style.backgroundColor="white"
      )}
    </>
  );
};

export default WIndowscroll;
