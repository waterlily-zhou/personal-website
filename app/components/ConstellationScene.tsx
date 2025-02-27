"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line, Stars, Text } from "@react-three/drei";
import { Vector3 } from "three";

export default function ConstellationScene() {
  // Define star positions for Andromeda's six key stars
  const starPositions = {
    alpheratz: new Vector3(1.5, 2.5, 0.3),
    δAndromedae: new Vector3(1, 1, 0.5),
    mirach: new Vector3(-0.5, -0.5, 0.2),
    almach: new Vector3(-3, -3, -1),
    μAndromedae: new Vector3(-1, 0, 1.5),
    vAndromedae: new Vector3(-2, 0.3, -3),
  };

  // Define connections between stars based on Andromeda constellation structure
  const lines = [
    [starPositions.alpheratz, starPositions.δAndromedae],
    [starPositions.δAndromedae, starPositions.mirach],
    [starPositions.mirach, starPositions.almach],
    [starPositions.mirach, starPositions.μAndromedae],
    [starPositions.μAndromedae, starPositions.vAndromedae],
    
  ];

  return (
    <Canvas 
      className="absolute top-0 left-0 w-full h-full"
      camera={{ position: [0, 0, 10], fov: 45 }}
    >
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        rotateSpeed={0.5}
      />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={1000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
      
      {/* Draw connection lines */}
      {lines.map(([start, end], index) => (
        <Line 
          key={index} 
          points={[start, end]} 
          color="red" 
          lineWidth={1.5} 
          opacity={0.5}
          transparent
        />
      ))}
      
      {/* Draw the stars */}
      {Object.entries(starPositions).map(([name, position], index) => (
        <group key={index}>
          <mesh position={position}>
            <sphereGeometry args={[0.1, 32, 32]} />
            <meshBasicMaterial color={name === 'alpheratz' ? '#ff4444' : 'white'} />
          </mesh>
          <Text
            position={[position.x + 0.3, position.y + 0.3, position.z]}
            fontSize={0.15}
            color="white"
            anchorX="left"
            anchorY="middle"
          >
            {name}
          </Text>
        </group>
      ))}

      {/* Add ambient light */}
      <ambientLight intensity={0.5} />
      {/* Add directional light for better 3D appearance */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </Canvas>
  );
}