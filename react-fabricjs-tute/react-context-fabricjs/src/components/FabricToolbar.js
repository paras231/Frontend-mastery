import React, { useContext } from "react";
import { FabricContext } from "./../context/FabricContext";
import FabricImage from "./objects/FabricImage";
import FabricLine from "./objects/FabricLine";
import FabricTextBox from "./objects/FabricTextBox";


//  this component is created to perform delete operations

const FabricToolbar = (props) => {
  const { canvas } = useContext(FabricContext);

  // remove the active objects from canvas.

  const removeObjects = () => {
    // canvas.getActiveObjects is function that returns all active objects ->  check documentation for more information
    canvas.getActiveObjects().forEach((obj) => {
      // run a forEach loop for all active objects and remove them
      canvas.remove(obj);
    });
    canvas.discardActiveObject().renderAll();
  };
  return (
    <>
      <FabricTextBox />
      <FabricLine />
      <FabricImage />
      <br />
      <br />
      <button onClick={removeObjects}>Delete Selected</button>
    </>
  );
};

export default FabricToolbar;
