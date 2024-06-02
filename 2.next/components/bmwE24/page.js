"use client";
import React from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Mesh } from "three";
import { BmwE4E82Model } from "./BmwE4F82Model";
import { useState } from "react";

const BmwE4E82 = (props) => {
  const [modelPosition, setModelPosition] = useState([0, -1, 0]);
  let camera = new PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    1,
    100
  );
  let [x, y, z] = [20, 10, 30];
  camera.position.set(x, y, z);

  let mesh = new Mesh();
  mesh.position.set(0, 0, 0);
  return (
    <Canvas camera={camera}>
      <OrbitControls maxPolarAngle={Math.PI * 0.5} />
      <Environment preset="city" />
      <mesh position={mesh.position}>
        <BmwE4E82Model scale={1.5} position={modelPosition} camera={camera} />
      </mesh>
    </Canvas>
  );
};

export default BmwE4E82;
