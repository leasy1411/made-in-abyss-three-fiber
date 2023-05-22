import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Group } from 'three';
import { useRef } from 'react';

export default function Flowers() {
    const FLOWER_COUNT = 50;
    const groupRef = useRef<Group>(null);
    const flowerModel = useLoader(GLTFLoader, '/flower.gltf');
    const flowerSeeds: number[] = Array(FLOWER_COUNT).fill(null).map(() => Math.random());
  
    useFrame(() => {
      groupRef.current?.children.forEach((flower, i) => {
        flower.position.y += 0.001;
        flower.rotation.y += flowerSeeds[i] * 0.003;
        flower.rotation.x += flowerSeeds[i] * 0.003;
        if (flower.position.y > 4) {
          flower.position.y = -4;
        }
      });
    });
  
    const generateFlowers = () => {
      const flowers = [];
  
      for (let i = 0; i < FLOWER_COUNT; i++) {
        const scale = flowerSeeds[i];
        flowers.push(
          <primitive
            key={i}
            object={flowerModel.scene.clone()}
            position={[Math.random() * 4 - 2, Math.random() * 8 - 5.8, Math.random() * 4 - 2]}
            scale={[scale, scale, scale]}
          />
        );
      }
  
      return flowers;
    };
  
    return <group ref={groupRef}>{generateFlowers()}</group>;
  };