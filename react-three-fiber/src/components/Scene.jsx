import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {  useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
export function Model(props) {
  const mesh1Ref = useRef(null);
  const colorMap = useLoader(TextureLoader, '/vite.svg')
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder051_liser_line_0.geometry}
        material={materials.liser_line}
        position={[430.548, 424.113, -1.443]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={90.737}
      >
        <meshBasicMaterial map={colorMap}  />
      </mesh>

      <mesh
        geometry={nodes.qwqd_wood_parts002_0.geometry}
        material={materials["wood_parts.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane001_wood_parts002_0.geometry}
        material={materials["wood_parts.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane000_handle002_0.geometry}
        material={materials["handle.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube002_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        position={[109.51, 395.153, 0.801]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube003_handle002_0.geometry}
        material={materials["handle.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube004_front002_0.geometry}
        material={materials["front.002"]}
        position={[664.248, 155.077, 93.999]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube013_front002_0.geometry}
        material={materials["front.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cylinder009_front002_0.geometry}
        material={materials["front.002"]}
        position={[119.148, 359.56, -0.011]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder008_front002_0.geometry}
        material={materials["front.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder003_front002_0.geometry}
        material={materials["front.002"]}
        position={[590.584, 375.421, 15.347]}
        scale={[7.323, 7.323, 1.474]}
      />
      <mesh
        geometry={nodes.Cube041_front002_0.geometry}
        material={materials["front.002"]}
        position={[263.568, 325.707, 37.264]}
        rotation={[-1.419, 0, 0]}
        scale={[4.038, 3.56, 3.56]}
      />
      <mesh
        geometry={nodes.Cube006_front002_0.geometry}
        material={materials["front.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube007_front002_0.geometry}
        material={materials["front.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube008_front002_0.geometry}
        material={materials["front.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cylinder_aim002_0.geometry}
        material={materials["aim.002"]}
        position={[369.546, 406.842, 47.275]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Group6960003_glass002_0.geometry}
        material={materials["glass.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube009_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cylinder001_front002_0.geometry}
        material={materials["front.002"]}
        position={[38.307, 305.614, -19.893]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder002_front002_0.geometry}
        material={materials["front.002"]}
        position={[28.033, 305.386, -56.843]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube010_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube011_aim002_0.geometry}
        material={materials["aim.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cylinder007_front002_0.geometry}
        material={materials["front.002"]}
        position={[-78.663, 210.211, -1.411]}
        scale={[9.175, 9.175, 7.465]}
      />
      <mesh
        geometry={nodes.Cylinder010_front002_0.geometry}
        material={materials["front.002"]}
        position={[401.319, 217.715, 135.268]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder011_front002_0.geometry}
        material={materials["front.002"]}
        position={[366.393, 155.656, 10.071]}
        rotation={[-1.169, 0.203, -0.136]}
        scale={10.242}
      />
      <mesh
        geometry={nodes.Cylinder012_front002_0.geometry}
        material={materials["front.002"]}
        position={[401.319, 217.715, 135.268]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder013_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[38.307, 305.614, -19.893]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[20.295, 20.295, 9.212]}
      />
      <mesh
        geometry={nodes.Cylinder014_front002_0.geometry}
        material={materials["front.002"]}
        position={[38.307, 305.614, -19.893]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder101_front002_0.geometry}
        material={materials["front.002"]}
        position={[853.715, 300.107, 0]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={18.068}
      />
      <mesh
        geometry={nodes.Cylinder099_front002_0.geometry}
        material={materials["front.002"]}
        position={[951.257, 264.947, 0]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={7.807}
      />
      <mesh
        geometry={nodes.Cylinder097_front002_0.geometry}
        material={materials["front.002"]}
        position={[932.574, 404.034, -0.108]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[5.691, 5.691, 4.113]}
      />
      <mesh
        geometry={nodes.Cylinder015_front002_0.geometry}
        material={materials["front.002"]}
        position={[780.563, 188.869, 44.851]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube017_aim002_0.geometry}
        material={materials["aim.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube018_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-162.23, 306.607, -15.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={22.359}
      />
      <mesh
        geometry={nodes.Group9120002_front002_0.geometry}
        material={materials["front.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube019_aim002_0.geometry}
        material={materials["aim.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube020_front002_0.geometry}
        material={materials["front.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube023_front002_0.geometry}
        material={materials["front.002"]}
        position={[67.945, 88.513, -64.555]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube024_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-257.409, 336.641, 28.81]}
        rotation={[-1.082, -0.206, 1.541]}
        scale={32.407}
      />
      <mesh
        geometry={nodes.Cube025_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-353.916, 261.874, -35.017]}
        rotation={[-2.155, 0.863, -1.863]}
        scale={32.407}
      />
      <mesh
        geometry={nodes.Cube026_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        position={[50.445, 346.606, -45.408]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder016_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[67.911, 343.446, -64.569]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder017_front002_0.geometry}
        material={materials["front.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder018_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        position={[5.742, -34.783, -193.102]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder019_front002_0.geometry}
        material={materials["front.002"]}
        position={[663.345, 394.472, 52.305]}
        rotation={[0.067, 0, -Math.PI / 2]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder020_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        position={[55.673, 266.334, -71.367]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder021_front002_0.geometry}
        material={materials["front.002"]}
        position={[-229.98, 354.51, -11.094]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder022_front002_0.geometry}
        material={materials["front.002"]}
        position={[-181.787, 271.076, 25.597]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={76.008}
      />
      <mesh
        geometry={nodes.Cube027_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-162.23, 306.607, -15.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={22.359}
      />
      <mesh
        geometry={nodes.qwqd001_wood_parts002_0.geometry}
        material={materials["wood_parts.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube028_front002_0.geometry}
        material={materials["front.002"]}
        position={[602.896, 598.948, 0.048]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube029_aim002_0.geometry}
        material={materials["aim.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube248_Cube262_wires002_0.geometry}
        material={materials["wires.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.BezierCurve084_BezierCurve038_wires002_0.geometry}
        material={materials["wires.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.BezierCurve077_BezierCurve031_wires002_0.geometry}
        material={materials["wires.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube251_Cube265_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube250_Cube264_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube061_mat_gloss_0.geometry}
        material={materials.mat_gloss}
        scale={100}
      />
      <mesh
        geometry={nodes.BezierCurve064_BezierCurve021_wires002_0.geometry}
        material={materials["wires.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder102_Cylinder100_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube258_Cube272_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-274.917, 313.659, 27.705]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube259_Cube273_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube257_Cube271_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube253_Cube000_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube246_Cube000_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-561.569, 297.565, -28.378]}
        rotation={[0.112, -0.024, -3.074]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder023_wires002_0.geometry}
        material={materials["wires.002"]}
        position={[-613.479, 188.691, 6.267]}
        rotation={[-2.66, 0.81, 0.728]}
        scale={2.617}
      />
      <mesh
        geometry={nodes.Cube256_Cube000_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube256_Cube001_wires002_0.geometry}
        material={materials["wires.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube030_wires002_0.geometry}
        material={materials["wires.002"]}
        position={[664.248, 155.077, 93.999]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        geometry={nodes.BezierCurve084_BezierCurve000_wires002_0.geometry}
        material={materials["wires.002"]}
        position={[-404.38, 243.946, 27.008]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder103_wires002_0.geometry}
        material={materials["wires.002"]}
        position={[-633.416, 205.865, -27.735]}
        rotation={[-2.962, -0.23, -2.255]}
        scale={1.799}
      />
      <mesh
        geometry={nodes.Cylinder111_wood_parts002_0.geometry}
        material={materials["wood_parts.002"]}
        position={[475.154, 367.437, -51.632]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.qwqd002_wood_parts002_0.geometry}
        material={materials["wood_parts.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube000_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        position={[118.653, 290.788, -1.821]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube032_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube033_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube034_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        position={[-219.712, 395.153, 0.801]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder029_Midle_parts002_0.geometry}
        material={materials["Midle_parts.002"]}
        position={[86.168, 401.941, -22.549]}
        scale={[5.18, 5.18, 4.884]}
      />
      <mesh
        geometry={nodes.Cube038_front002_0.geometry}
        material={materials["front.002"]}
        position={[-162.23, 306.607, -15.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={22.359}
      />
      <mesh
        geometry={nodes.Cylinder031_front002_0.geometry}
        material={materials["front.002"]}
        position={[38.307, 305.614, -19.893]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[20.295, 20.295, 9.212]}
      />
      <mesh
        geometry={nodes.Cylinder032_front002_0.geometry}
        material={materials["front.002"]}
        position={[366.393, 155.656, 10.071]}
        rotation={[-1.169, 0.203, -0.136]}
        scale={10.242}
      />
      <mesh
        geometry={nodes.Cube040_front002_0.geometry}
        material={materials["front.002"]}
        position={[687.661, 300.034, 122.875]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube039_front002_0.geometry}
        material={materials["front.002"]}
        position={[-113.316, 275.619, 28.011]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube016_front002_0.geometry}
        material={materials["front.002"]}
        position={[-162.23, 306.607, -15.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={22.359}
      />
      <mesh
        geometry={nodes.Cylinder033_front002_0.geometry}
        material={materials["front.002"]}
        position={[-169.857, 305.614, -19.893]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={[20.295, 20.295, 9.212]}
      />
      <mesh
        geometry={nodes.Cube043_front002_0.geometry}
        material={materials["front.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={39.632}
      />
      <mesh
        geometry={nodes.Cube014_front002_0.geometry}
        material={materials["front.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder005_front002_0.geometry}
        material={materials["front.002"]}
        position={[635.974, 283.061, 109.519]}
        rotation={[-0.672, 0.044, 0.024]}
        scale={4.402}
      />
      <mesh
        geometry={nodes.Cylinder006_front002_0.geometry}
        material={materials["front.002"]}
        position={[637.493, 225.427, 109.478]}
        rotation={[0.683, 0.011, 0.145]}
        scale={4.402}
      />
      <mesh
        geometry={nodes.Cylinder035_front002_0.geometry}
        material={materials["front.002"]}
        position={[715.305, 225.717, 110.196]}
        rotation={[0.681, 0.008, 0.145]}
        scale={4.402}
      />
      <mesh
        geometry={nodes.Cylinder036_front002_0.geometry}
        material={materials["front.002"]}
        position={[731.011, 263.937, 108.23]}
        rotation={[-0.137, 0.056, 0.173]}
        scale={3.634}
      />
      <mesh
        geometry={nodes.Cylinder037_front002_0.geometry}
        material={materials["front.002"]}
        position={[728.309, 356.812, 77.729]}
        rotation={[-0.146, 0.05, 0.071]}
        scale={3.184}
      />
      <mesh
        geometry={nodes.Cylinder038_front002_0.geometry}
        material={materials["front.002"]}
        position={[639.907, 356.761, 77.327]}
        rotation={[-0.141, 0.035, 0.071]}
        scale={3.184}
      />
      <mesh
        geometry={nodes.Cylinder039_front002_0.geometry}
        material={materials["front.002"]}
        position={[646.079, 264.331, 38.865]}
        rotation={[2.924, -0.042, 2.671]}
        scale={3.184}
      />
      <mesh
        geometry={nodes.Cylinder040_front002_0.geometry}
        material={materials["front.002"]}
        position={[733.512, 264.788, 38.454]}
        rotation={[2.991, -0.045, 2.719]}
        scale={3.184}
      />
      <mesh
        geometry={nodes.Cylinder041_front002_0.geometry}
        material={materials["front.002"]}
        position={[609.444, 320.493, 72.287]}
        rotation={[-1.072, -1.372, -1.505]}
        scale={3.184}
      />
      <mesh
        geometry={nodes.Cylinder042_front002_0.geometry}
        material={materials["front.002"]}
        position={[609.621, 320.078, 34.971]}
        rotation={[-1.897, -1.402, -2.318]}
        scale={3.184}
      />
      <mesh
        geometry={nodes.Cylinder043_front002_0.geometry}
        material={materials["front.002"]}
        position={[776.267, 321.966, 84.452]}
        rotation={[-0.3, 0, 0.177]}
        scale={2.769}
      />
      <mesh
        geometry={nodes.Cylinder044_front002_0.geometry}
        material={materials["front.002"]}
        position={[855.7, 338.581, 1.217]}
        rotation={[-0.101, 1.569, 0.026]}
        scale={4.659}
      />
      <mesh
        geometry={nodes.Cube246_Cube002_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[480.163, 339.389, -49.231]}
        rotation={[0.012, 0, 0.013]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube251_Cube000_aim002_0.geometry}
        material={materials["aim.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube251_Cube001_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube251_Cube002_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube258_Cube000_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-173.344, 353.726, 41.321]}
        rotation={[0.127, -0.338, -0.231]}
        scale={104.997}
      />
      <mesh
        geometry={nodes.Cube254_Cube000_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-639.609, 199.222, 0.979]}
        rotation={[-0.295, 0.402, 0.027]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube051_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-353.514, 262.041, -34.469]}
        rotation={[-0.325, -0.636, -2.222]}
        scale={28.219}
      />
      <mesh
        geometry={nodes.Cube021_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-162.23, 306.607, -15.6]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={22.359}
      />
      <mesh
        geometry={nodes.Plane013_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[478.279, 286.762, -50.239]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder073_Cylinder077_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder103_Cylinder000_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-177.993, 310.16, 50.696]}
        rotation={[-0.015, 0.021, 0.157]}
        scale={102.381}
      />
      <mesh
        geometry={nodes.Cube052_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-533.353, 249.536, 24.617]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube054_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-533.353, 249.536, 24.617]}
        scale={100}
      />
      <mesh
        geometry={nodes.BezierCurve084_BezierCurve010_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube254_Cube001_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-639.609, 199.222, 0.979]}
        rotation={[-0.295, 0.402, 0.027]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube258_Cube002_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-305.459, 280.116, -22.834]}
        rotation={[0.215, -0.237, -0.338]}
        scale={82.958}
      />
      <mesh
        geometry={nodes.Cube258_Cube003_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-312.062, 313.877, 24.967]}
        rotation={[0.386, -0.179, 0.297]}
        scale={104.997}
      />
      <mesh
        geometry={nodes.Cube258_Cube001_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-305.684, 292.041, 30.735]}
        rotation={[0.091, -0.047, 0.005]}
        scale={93.361}
      />
      <mesh
        geometry={nodes.Cylinder073_Cylinder001_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube056_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-668.019, 230.743, 22.588]}
        rotation={[-0.042, -0.054, 0.039]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube057_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-668.019, 230.743, 22.588]}
        rotation={[-0.042, -0.054, 0.039]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube058_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-661.855, 231.683, -23.734]}
        rotation={[3.124, -0.082, 2.994]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube059_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-661.855, 231.683, -23.734]}
        rotation={[3.124, -0.082, 2.994]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube060_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-533.935, 248.578, -24.401]}
        rotation={[Math.PI, 0, 2.988]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cube062_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-533.935, 248.578, -24.401]}
        rotation={[Math.PI, 0, 2.988]}
        scale={100}
      />
      <mesh
        geometry={nodes.Cylinder103_Cylinder001_detail002_0.geometry}
        material={materials["detail.002"]}
        position={[-178.035, 297.141, 50.877]}
        rotation={[-1.043, -0.008, 0.011]}
        scale={102.381}
      />
      <mesh
        geometry={nodes.Group5029001_detail002_0.geometry}
        material={materials["detail.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane005_Plane022_feather002_0.geometry}
        material={materials["feather.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane012_Plane028_feather002_0.geometry}
        material={materials["feather.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane004_Plane021_feather002_0.geometry}
        material={materials["feather.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane_Plane003_feather002_0.geometry}
        material={materials["feather.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane014_Plane004_feather002_0.geometry}
        material={materials["feather.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane011_Plane027_feather002_0.geometry}
        material={materials["feather.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane015_Plane006_feather002_0.geometry}
        material={materials["feather.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane009_Plane025_feather002_0.geometry}
        material={materials["feather.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane010_Plane026_feather002_0.geometry}
        material={materials["feather.002"]}
        scale={100}
      />
      <mesh
        geometry={nodes.Plane003_Plane020_feather002_0.geometry}
        material={materials["feather.002"]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");
