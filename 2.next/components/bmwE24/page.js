"use client";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { BmwE4E82Model } from "./BmwE4F82Model";

const BmwE4E82 = () => {
  let camera = new PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    1,
    100
  );
  let [x, y, z] = [20, 10, 30];
  camera.position.set(x, y, z);
  return (
    <Canvas camera={camera}>
      <OrbitControls />
      <Environment preset="city" />
      <BmwE4E82Model
        scale={1.5}
        position={[0, -1, 0]}
        // rotation={[0.2, -0.75, 0]}
      />
    </Canvas>
  );
};

export default BmwE4E82;
