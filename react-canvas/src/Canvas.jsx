import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

const Canvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      backgroundColor: "red",
      height: window.innerHeight,
      width: window.innerWidth,
    });
    const rect = new fabric.Rect({
      width: 50,
      height: 50,
      fill: "pink",
      angle: 10,
      top: 20,
      left: 20,
    });
    const textbox = new fabric.Textbox("Click on the Rectangle to move it.", {
      fontSize: 20,
      left: 50,
      top: 100,
      width: 200,
    });
    canvas.add(textbox);
    canvas.add(rect);

    canvas.on("object:moving", (e) => {
      e.target.opacity = 0.5;
      e.target.backgroundColor = 'yellow'
    });
    // UseEffect's cleanup function
    return () => {
      canvas.dispose();
    };
  }, []);
  return (
    <>
      <canvas id="my-fabric-canvas" ref={canvasRef} width="400" height="300" />
    </>
  );
};

export default Canvas;
