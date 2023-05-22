import { Float } from "@react-three/drei";
import { Vector3, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, SpotLight } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default function Model({ position, fileRoute}: { position: number[], fileRoute: string }) {
    const meshRef = useRef<Mesh>(null);
    const model = useLoader(GLTFLoader, fileRoute);
    const spotLightRef = useRef<SpotLight>(null);
    const speed = parseFloat((Math.random() * (1.3 - 1) + 1).toFixed(2));
    const height = parseFloat((Math.random() * (0.2 - 0.15) + 0.15).toFixed(2));

    useFrame(() => {
      if (spotLightRef.current && meshRef.current) {
        spotLightRef.current.target = meshRef.current; // Set the target of the spotLight to the target mesh
        spotLightRef.current.lookAt(meshRef.current.position); // Make the spotLight point towards the target mesh
      }
    });
  
    return (
      <>
        <spotLight
          ref={spotLightRef}
          position={[position[0], position[1] + 1, position[2] ] as Vector3}
          angle={Math.PI / 4}
          penumbra={0.1}
          intensity={0.5}
          castShadow
        />
        <spotLight
          ref={spotLightRef}
          position={[position[0], position[1] - 1, position[2] ] as Vector3}
          angle={Math.PI / 4}
          penumbra={0.1}
          intensity={0.2}
          castShadow
        />
        <Float
          speed={speed}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[-0.1, height]}
        >
          <mesh position={position as Vector3} ref={meshRef}>
            <primitive object={model.scene} />
          </mesh>
        </Float>
      </>
    );
  }