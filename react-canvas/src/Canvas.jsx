import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

const Canvas = () => {
  const canvasRef = useRef(null);
  const height = (window.innerHeight * 70) / 100;
  const width = (window.innerWidth * 90) / 100;





  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      height: height,
      width: width,
      backgroundColor: "purple",
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
      e.target.backgroundColor = "yellow";
    });
    // UseEffect's cleanup function
    return () => {
      canvas.dispose();
    };
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <canvas ref={canvasRef} style={style} />
      </div>
    </>
  );
};

export default Canvas;

const style = {
  border: "1px solid red",
};
