import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Model } from "./Scene";

const CanvasWrapper = () => {
  const Model = () => {
    const gltf = useLoader(GLTFLoader, "./scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.4} />
      </>
    );
  };
  const [active, setActive] = useState(false);
  return (
    <>
      <div style={{ background: "purple" }} id="canvas-container">
        <Canvas style={{ height: "100vh", width: "70vw" }}>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[3, 7, 5]} />
          <Suspense fallback={null}>
            <Model />
            <OrbitControls />
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default CanvasWrapper;
