import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
  useContext,
} from "react";
import { FabricContext } from "../context/FabricContext";

const FabricCanvas = ({ jsonData = null}) => {
  const canvasEl = useRef(null);
  const { canvas, initCanvas, setActiveObject, loadFromJSON } = useContext(FabricContext)
  useLayoutEffect(() => {
    if (jsonData) {
        loadFromJSON(canvasEl.current, jsonData)
    } else {
        initCanvas(canvasEl.current, {
            width: 200,
            height: 200,
        })
    }
}, [canvasEl, initCanvas, loadFromJSON, jsonData])

  const updateActiveObject = useCallback(
    (e) => {
      if (!e) {
        return;
      }
      setActiveObject(canvas.getActiveObject());
      canvas.renderAll();
    },
    [canvas, setActiveObject]
  );

  console.log(canvas?.getActiveObject)
  useEffect(() => {
    if (!canvas) {
      return;
    }
    canvas.on("selection:created", updateActiveObject);
    canvas.on("selection:updated", updateActiveObject);
    canvas.on("selection:cleared", updateActiveObject);

    return () => {
      canvas.off("selection:created");
      canvas.off("selection:cleared");
      canvas.off("selection:updated");
    };
  }, [canvas, updateActiveObject]);
  return (
    <>
      <canvas
        ref={canvasEl}
        id="fabric-canvas"
        width={500}
        height={500}
      />
    </>
  );
};

export default FabricCanvas;
