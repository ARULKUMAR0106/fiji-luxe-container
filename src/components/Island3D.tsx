import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text, Cloud, Sky } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Island geometry component
const Island = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, -2, 0]} scale={[3, 1, 3]}>
        <cylinderGeometry args={[2, 2.5, 1, 16]} />
        <meshStandardMaterial color="#4ade80" />
      </mesh>
      
      {/* Palm trees */}
      <group position={[1, -1.5, 0.5]}>
        <mesh position={[0, 0.5, 0]} scale={[0.1, 1, 0.1]}>
          <cylinderGeometry args={[0.05, 0.08, 1, 8]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
        <mesh position={[0, 1, 0]} scale={[0.5, 0.1, 0.5]}>
          <sphereGeometry args={[0.3, 8, 6]} />
          <meshStandardMaterial color="#228b22" />
        </mesh>
      </group>
      
      <group position={[-1.2, -1.5, -0.3]}>
        <mesh position={[0, 0.5, 0]} scale={[0.1, 1, 0.1]}>
          <cylinderGeometry args={[0.05, 0.08, 1, 8]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
        <mesh position={[0, 1, 0]} scale={[0.5, 0.1, 0.5]}>
          <sphereGeometry args={[0.3, 8, 6]} />
          <meshStandardMaterial color="#228b22" />
        </mesh>
      </group>
    </Float>
  );
};

// Ocean waves component
const Ocean = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1 - 3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <meshStandardMaterial 
        color="#0ea5e9" 
        transparent 
        opacity={0.8}
        roughness={0.1}
        metalness={0.2}
      />
    </mesh>
  );
};

// Container boat floating nearby
const ContainerBoat = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2 - 2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} position={[4, -2, 2]} scale={[0.3, 0.3, 0.3]}>
        {/* Container */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2, 1, 1]} />
          <meshStandardMaterial color="#dc2626" />
        </mesh>
        
        {/* Container windows */}
        <mesh position={[0.9, 0.5, 0.51]}>
          <planeGeometry args={[0.3, 0.2]} />
          <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.3, 0.5, 0.51]}>
          <planeGeometry args={[0.3, 0.2]} />
          <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} />
        </mesh>
        
        {/* Boat base */}
        <mesh position={[0, -0.2, 0]} scale={[1.2, 0.3, 0.8]}>
          <boxGeometry args={[2, 1, 1]} />
          <meshStandardMaterial color="#374151" />
        </mesh>
      </group>
    </Float>
  );
};

interface Island3DProps {
  className?: string;
}

const Island3D = ({ className = "" }: Island3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [8, 4, 8], fov: 50 }}
        style={{ background: 'linear-gradient(to bottom, #0ea5e9, #06b6d4)' }}
      >
        <Sky 
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          color="#fbbf24"
          castShadow
        />
        <pointLight position={[-10, -10, -10]} color="#0ea5e9" intensity={0.3} />
        
        <Island />
        <Ocean />
        <ContainerBoat />
        
        <Cloud
          opacity={0.6}
          speed={0.4}
          position={[5, 2, -5]}
        />
        <Cloud
          opacity={0.4}
          speed={0.2}
          position={[-8, 3, -8]}
        />
        
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          enableRotate={true}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>
    </div>
  );
};

export default Island3D;