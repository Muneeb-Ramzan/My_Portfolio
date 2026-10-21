import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { soundFX } from '../../utils/audio';

export default function FloatingHologram() {
  const groupRef = useRef();
  const brainMeshRef = useRef();
  const wireframeRef = useRef();
  const innerCoreRef = useRef();
  const ringsRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Generate synaptic nodes distributed around the neural core
  const synapses = useMemo(() => {
    const nodes = [];
    const count = 18;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const radius = 1.9 + (Math.sin(i * 1.5) * 0.2);
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      nodes.push(new THREE.Vector3(x, y, z));
    }
    return nodes;
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (brainMeshRef.current) {
      brainMeshRef.current.rotation.x = Math.sin(time * 0.5) * 0.2;
      brainMeshRef.current.rotation.y += delta * (hovered ? 0.8 : 0.35);
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y += delta * 0.2;
      wireframeRef.current.rotation.z = Math.sin(time * 0.3) * 0.1;
    }

    if (innerCoreRef.current) {
      const pulse = 1 + Math.sin(time * 4) * (hovered ? 0.25 : 0.15);
      innerCoreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.z += delta * 0.4;
      ringsRef.current.rotation.x = Math.sin(time * 0.8) * 0.3;
    }
  });

  return (
    <Float speed={2.2} rotationIntensity={1.0} floatIntensity={1.6}>
      <group
        ref={groupRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          soundFX.playHover();
        }}
        onPointerOut={() => setHovered(false)}
        onClick={() => soundFX.playClick()}
      >
        {/* Outer Geometric Neural Cage */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[2.3, 1]} />
          <meshBasicMaterial
            color={hovered ? '#ff007f' : '#00f3ff'}
            wireframe
            transparent
            opacity={hovered ? 0.5 : 0.25}
          />
        </mesh>

        {/* Pulsating Synaptic Nodes around Neural Field */}
        {synapses.map((pos, idx) => (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.07, 12, 12]} />
            <meshStandardMaterial
              color={hovered ? '#00f3ff' : '#a855f7'}
              emissive={hovered ? '#00f3ff' : '#ff007f'}
              emissiveIntensity={hovered ? 4 : 2.5}
            />
          </mesh>
        ))}

        {/* Central Glowing AI Neural Brain Plasma Core */}
        <mesh ref={brainMeshRef} scale={hovered ? 1.2 : 1.05}>
          <dodecahedronGeometry args={[1.4, 2]} />
          <MeshDistortMaterial
            color={hovered ? '#ff007f' : '#00f3ff'}
            emissive={hovered ? '#9333ea' : '#0284c7'}
            emissiveIntensity={hovered ? 1.4 : 0.9}
            roughness={0.15}
            metalness={0.85}
            distort={hovered ? 0.5 : 0.3}
            speed={3.5}
            wireframe={false}
          />
        </mesh>

        {/* High-energy Quantum Nucleus */}
        <mesh ref={innerCoreRef}>
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={hovered ? 0.95 : 0.85}
          />
        </mesh>

        {/* Holographic Equatorial Ring */}
        <group ref={ringsRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.8, 1.84, 64]} />
            <meshBasicMaterial
              color={hovered ? '#ff007f' : '#00f3ff'}
              side={THREE.DoubleSide}
              transparent
              opacity={0.7}
            />
          </mesh>
          <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
            <ringGeometry args={[2.0, 2.03, 64]} />
            <meshBasicMaterial
              color="#a855f7"
              side={THREE.DoubleSide}
              transparent
              opacity={0.5}
            />
          </mesh>
        </group>

        {/* Dynamic Light Emission from the Neural Core */}
        <pointLight
          color={hovered ? '#ff007f' : '#00f3ff'}
          intensity={hovered ? 5.0 : 3.0}
          distance={12}
        />
      </group>
    </Float>
  );
}
