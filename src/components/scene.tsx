import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Cave from "./cave";
import Flowers from "./flowers";
import Model from "./model";
import Rig from "./rig";
import { PerspectiveCamera } from "@react-three/drei";
import Loader from "./loader";

export default function Scene() {
  const [modelPos, setModelPos] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setModelPos(window.innerWidth > 768 ? 0 : 0.5);
    }
  }, []);
  return (
    <div id="canvas-container" className='h-screen w-screen fixed'>
        <Canvas>
          <Suspense fallback={<Loader />}>
            <group name="Models" rotation={[0, -0.8, 0]}>
              <group name="Background">
                <Cave />
              </group>
              <group name="Characters">
                <Suspense fallback={ <Loader /> }>
                  <Model position={[-0.2 - modelPos, 0.5, -0.4]} fileRoute="/reg.gltf" />
                  <Model position={[0.4 - modelPos, 0.1, 0]} fileRoute="/riko.gltf" />
                  <Model position={[0 - modelPos, -0.2, 0.6]} fileRoute="/nanachi.gltf" />
                </Suspense>
              </group>
              <Flowers />
            </group>
            <group name="Camera">
              <Rig />
              <PerspectiveCamera makeDefault far={100} near={0.1} fov={28}></PerspectiveCamera>
            </group>
            <group name="Lights">
              <ambientLight intensity={0.5} color={"#0000cc"} />
              <spotLight intensity={0.3} position={[0, 3, 0]} color={"#ffffe6"} />
            </group>
          </Suspense>
        </Canvas>
    </div>
  )
}