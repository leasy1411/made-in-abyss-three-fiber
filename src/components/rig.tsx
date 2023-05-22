import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";
import * as THREE from "three";

export default function Rig() {
    const [vec] = useState(() => new THREE.Vector3())
    const { camera, mouse } = useThree();
    useFrame(() => camera.position.lerp(vec.set(mouse.x * 0.2 -0.5, mouse.y * 0.1, 3.5), 0.05));
    return null;
  }