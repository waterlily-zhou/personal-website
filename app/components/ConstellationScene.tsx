"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line, Stars } from "@react-three/drei";
import { Vector3 } from "three";

export default function ConstellationScene() {
  // Convert arrays to Vector3 for proper typing
  const lines = [
    [new Vector3(-2, 0, 0), new Vector3(0, 2, 0)],
    [new Vector3(0, 2, 0), new Vector3(2, -1, 0)],
    [new Vector3(2, -1, 0), new Vector3(3, 1, 0)],
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
      
      {lines.map(([start, end], index) => (
        <Line 
          key={index} 
          points={[start, end]} 
          color="red" 
          lineWidth={1} 
          opacity={0.5} 
          transparent 
        />
      ))}
      
      {/* Main bright star (corresponds to the blurred circle) */}
      <mesh position={[0, 2, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial color="#ff4444" />
      </mesh>
      
      {/* Other stars */}
      <mesh position={[-2, 0, 0]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshBasicMaterial color="gold" />
      </mesh>
      <mesh position={[2, -1, 0]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>
      <mesh position={[3, 1, 0]}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshBasicMaterial color="white" />
      </mesh>

      {/* Add ambient light */}
      <ambientLight intensity={0.5} />
      {/* Add directional light for better 3D appearance */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
    </Canvas>
  );
}