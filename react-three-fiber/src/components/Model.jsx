import React, { useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const [active, setActive] = useState(false);
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");
  console.log(materials);
  return (
    <group ref={group} {...props} dispose={null} scale={0.4}>
      <mesh
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        castShadow
        receiveShadow
        geometry={nodes.name}
        material={materials["liser_line"]}
      />
      <mesh
        scale={active ? 1.5 : 1}
        onClick={() => setActive(!active)}
        castShadow
        receiveShadow
        geometry={nodes.name}
        material={materials["wood_parts.002"]}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");
