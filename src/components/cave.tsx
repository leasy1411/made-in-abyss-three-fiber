import { useTexture } from "@react-three/drei";

export default function Cave() {
    
  const sideTexture = useTexture('/cave.png');
  const topTexture = useTexture('/cavetop.png');
  const bottomTexture = useTexture('/cavebottom3.png');
  
  return (
    <>
        {/* Bottom */}
        <mesh position={[0, -13.8, 0]}>
        <cylinderBufferGeometry args={[5, 5, 0.1, 100]} attach="geometry" />
        <meshBasicMaterial map={bottomTexture} attach="material"/>
        </mesh>

        {/* Top */}
        <mesh position={[0, 5.8, 0]}>
        <cylinderBufferGeometry args={[5, 5, 0.1, 32]} attach="geometry" />
        <meshBasicMaterial map={topTexture} attach="material" />
        </mesh>

        {/* Side */}
        <mesh position={[0, -4, 0]}>
        <cylinderBufferGeometry args={[5, 5, 20, 32]} attach="geometry" />
        <meshBasicMaterial map={sideTexture} attach="material" side={1}  />
        </mesh>
    </>
  )
}