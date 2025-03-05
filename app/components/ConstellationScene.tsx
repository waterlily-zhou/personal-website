"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Line, Stars, Text, shaderMaterial, Billboard } from "@react-three/drei";
import { Vector3, Mesh } from "three";
import { extend } from '@react-three/fiber';
import { useState, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// Custom shader for radial gradient
const StarMaterial = shaderMaterial(
  {
    color: [1, 1, 1],
    opacity: 1.0
  },
  // Vertex shader
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform vec3 color;
    uniform float opacity;
    varying vec2 vUv;
    void main() {
      float dist = length(vUv - vec2(0.5));
      float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
      gl_FragColor = vec4(color, opacity * alpha * alpha);
    }
  `
);

extend({ StarMaterial });

interface StarProps {
  position: Vector3;
  color: string;
  pointColor: string;
  scale?: number;
  onClick?: () => void;
  isClickable?: boolean;
  isHovered?: boolean;
  onHover?: (isHovered: boolean) => void;
}

function Star({ position, color, scale = 1, pointColor, onClick, isClickable, isHovered, onHover }: StarProps) {
  const innerRef = useRef<Mesh>(null);
  
  // Add breathing animation
  useFrame((state) => {
    if (innerRef.current) {
      const t = state.clock.getElapsedTime();
      // Create a smooth breathing effect using sin wave
      const breathingScale = 1 + Math.sin(t * 2) * 0.1;
      innerRef.current.scale.x = breathingScale;
      innerRef.current.scale.y = breathingScale;
    }
  });

  // Convert hex color to RGB array
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return [r, g, b];
  };

  const starPoints = [];
  const numPoints = 4;
  const innerRadius = 0.02 * scale; // Smaller inner radius
  const outerRadius = 0.2 * scale;  // Slightly shorter points
  
  // Create four points at 0°, 90°, 180°, 270°
  for (let i = 0; i < numPoints; i++) {
    const angle = i * Math.PI / 2; // Rotate by 90° each time, starting at 0°
    const halfAngle = Math.PI / 8; // Width of each point
    
    // For each point, create a triangle
    starPoints.push(
      0, 0, 0, // Center
      Math.cos(angle - halfAngle) * innerRadius, Math.sin(angle - halfAngle) * innerRadius, 0, // Left base
      Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius, 0, // Point tip
      
      0, 0, 0, // Center
      Math.cos(angle) * outerRadius, Math.sin(angle) * outerRadius, 0, // Point tip
      Math.cos(angle + halfAngle) * innerRadius, Math.sin(angle + halfAngle) * innerRadius, 0, // Right base
    );
  }

  return (
    <group position={position}>
      {/* Use Billboard to make the star always face camera */}
      <Billboard>
        {/* Four-pointed star (render first) */}
        <mesh 
          renderOrder={1}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            if (isClickable) {
              onHover?.(true);
              document.body.style.cursor = 'pointer';
            }
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            if (isClickable) {
              onHover?.(false);
              document.body.style.cursor = 'auto';
            }
          }}
        >
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={starPoints.length / 3}
              array={new Float32Array(starPoints)}
              itemSize={3}
              args={[new Float32Array(starPoints), 3]}
            />
          </bufferGeometry>
          <meshBasicMaterial 
            color={pointColor} 
            transparent 
            opacity={isHovered ? 1 : 0.8} 
            depthWrite={false} 
          />
        </mesh>

        {/* Central radial gradient (render second) */}
        <mesh ref={innerRef} renderOrder={2}>
          <planeGeometry args={[0.15 * scale, 0.15 * scale]} />
          {/* @ts-expect-error Custom material */}
          <starMaterial 
            color={hexToRgb(color)} 
            opacity={isHovered ? 1.0 : 0.8} 
            transparent 
            depthWrite={false} 
          />
        </mesh>
      </Billboard>
    </group>
  );
}

export default function ConstellationScene() {
  const [hoveredStar, setHoveredStar] = useState<string | null>(null);

  // Define star positions for Andromeda's six key stars
  const starPositions = {
    alpheratz: { 
      pos: new Vector3(1.5, 2.5, 1.5), 
      color: '#FFFFFF', // Center color
      pointColor: '#4169E1', // Blue points
      scale: 1.2 
    },
    δAndromedae: { 
      pos: new Vector3(1, 1, 1.1), 
      color: '#FFFFFF',
      pointColor: '#FFFFFF', 
      scale: 0.8 
    },
    mirach: { 
      pos: new Vector3(-0.5, -0.5, -1), 
      color: '#FFFFFF', // White center
      pointColor: '#FFA500', // Orange points
      scale: 1.5 
    },
    almach: { 
      pos: new Vector3(-3, -3, -1), 
      color: '#FFFFFF',
      pointColor: '#FFFFFF', 
      scale: 1 
    },
    μAndromedae: { 
      pos: new Vector3(-0.8, 0, 1.5), 
      color: '#FFFFFF',
      pointColor: '#4169E1', 
      scale: 0.7 
    },
    vAndromedae: { 
      pos: new Vector3(-2, 0.3, -3), 
      color: '#FFFFFF',
      pointColor: '#4169E1', 
      scale: 0.5 
    },
  };

  // Define connections between stars based on Andromeda constellation structure
  const lines = [
    [starPositions.alpheratz.pos, starPositions.δAndromedae.pos],
    [starPositions.δAndromedae.pos, starPositions.mirach.pos],
    [starPositions.mirach.pos, starPositions.almach.pos],
    [starPositions.mirach.pos, starPositions.μAndromedae.pos],
    [starPositions.μAndromedae.pos, starPositions.vAndromedae.pos],
  ];

  return (
    <>
      <div className="absolute top-4 left-0 w-full text-center z-10 pointer-events-none">
        <p className="text-gray-300 text-sm font-light">Touch the brightest stars to navigate.</p>
      </div>
      <Canvas 
        className="absolute top-0 left-0 w-full h-full touch-pan-y"
        camera={{ position: [0, 0, 10], fov: 45, rotation: [0, 0, 0] }}
      >
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={-0.2}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
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
            renderOrder={0}
            depthWrite={false}
          />
        ))}
        
        {/* Draw the stars */}
        {Object.entries(starPositions).map(([name, { pos, color, pointColor, scale }], index) => (
          <group key={index} renderOrder={3}>
            <Star 
              position={pos}
              color={color}
              pointColor={pointColor}
              scale={scale}
              isClickable={name === 'mirach' || name === 'alpheratz'}
              isHovered={hoveredStar === name}
              onHover={(isHovered) => setHoveredStar(isHovered ? name : null)}
              onClick={name === 'mirach' ? 
                () => {
                  const aboutSection = document.querySelector('.about-section');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                } : name === 'alpheratz' ?
                () => {
                  const projectsSection = document.querySelector('.projects-section');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                } : undefined}
            />
            <Billboard position={[pos.x + 0.2, pos.y + 0.2, pos.z]}>
              <group>
                <Text
                  fontSize={name === 'mirach' || name === 'alpheratz' ? 0.13 : 0.09}
                  color={name === 'mirach' || name === 'alpheratz' ? 'white' : '#666666'}
                  anchorX="left"
                  anchorY="middle"
                  onClick={(e) => {
                    if (name === 'mirach') {
                      e.stopPropagation();
                      const aboutSection = document.querySelector('.about-section');
                      if (aboutSection) {
                        const rect = aboutSection.getBoundingClientRect();
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const targetPosition = scrollTop + rect.top - 50;
                        window.scrollTo({
                          top: targetPosition,
                          behavior: 'smooth'
                        });
                      }
                    } else if (name === 'alpheratz') {
                      e.stopPropagation();
                      const projectsSection = document.querySelector('#projects-section');
                      if (projectsSection) {
                        const rect = projectsSection.getBoundingClientRect();
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        const targetPosition = scrollTop + rect.top - 50;
                        window.scrollTo({
                          top: targetPosition,
                          behavior: 'smooth'
                        });
                      }
                    }
                  }}
                  onPointerOver={(e) => {
                    if (name === 'mirach' || name === 'alpheratz') {
                      e.stopPropagation();
                      document.body.style.cursor = 'pointer';
                    }
                  }}
                  onPointerOut={(e) => {
                    if (name === 'mirach' || name === 'alpheratz') {
                      e.stopPropagation();
                      document.body.style.cursor = 'auto';
                    }
                  }}
                >
                  {name === 'alpheratz' ? 'Projects & Writings' : name === 'mirach' ? 'About Me' : name}
                </Text>
                {(name === 'alpheratz' || name === 'mirach') && (
                  <Text
                    position={[0, -0.2, 0]}
                    fontSize={0.09}
                    color="#666666"
                    anchorX="left"
                    anchorY="middle"
                  >
                    {name}
                  </Text>
                )}
              </group>
            </Billboard>
          </group>
        ))}

        {/* Add ambient light */}
        <ambientLight intensity={0.5} />
        {/* Add directional light for better 3D appearance */}
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
      </Canvas>
    </>
  );
}