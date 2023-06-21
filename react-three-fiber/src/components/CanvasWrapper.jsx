import React from "react";
import { Canvas } from "@react-three/fiber";

const CanvasWrapper = () => {
  return (
    <>
      <div style={{ background: "red" }} id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[3, 7, 5]} />
          <mesh>
            {/* <boxGeometry /> */}
            <sphereGeometry/>
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default CanvasWrapper;
