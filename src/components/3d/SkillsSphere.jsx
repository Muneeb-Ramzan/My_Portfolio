import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Billboard, Text } from '@react-three/drei';
import * as THREE from 'three';
import { soundFX } from '../../utils/audio';

function SkillBadge({ position, text, color = '#00f3ff', onSelect }) {
  const [hovered, setHovered] = useState(false);
  const scale = hovered ? 1.3 : 1.0;

  return (
    <group position={position}>
      <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
        <group
          scale={scale}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            soundFX.playHover();
            if (onSelect) onSelect(text);
          }}
          onPointerOut={() => {
            setHovered(false);
          }}
          onClick={(e) => {
            e.stopPropagation();
            soundFX.playClick();
          }}
        >
          {/* Glowing node sphere */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial
              color={hovered ? '#ff007f' : color}
              emissive={hovered ? '#ff007f' : color}
              emissiveIntensity={hovered ? 2.5 : 1.2}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Skill Name Text */}
          <Text
            position={[0, 0.45, 0]}
            fontSize={0.28}
            color={hovered ? '#ffffff' : '#e2e8f0'}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.02}
            outlineColor="#030509"
          >
            {text}
          </Text>
        </group>
      </Billboard>
    </group>
  );
}

export default function SkillsSphere({ onActiveSkill }) {
  const groupRef = useRef();

  const skillsList = useMemo(() => [
    { name: "Python", color: "#38bdf8" },
    { name: "Generative AI", color: "#ff007f" },
    { name: "RAG", color: "#00f3ff" },
    { name: "LangChain", color: "#a855f7" },
    { name: "LangGraph", color: "#c084fc" },
    { name: "AI Agents", color: "#00ff9d" },
    { name: "Chatbots", color: "#38bdf8" },
    { name: "Machine Learning", color: "#fbbf24" },
    { name: "AI", color: "#00f3ff" },
    { name: "Pandas", color: "#f43f5e" },
    { name: "NumPy", color: "#60a5fa" },
    { name: "HTML", color: "#f97316" },
    { name: "CSS", color: "#06b6d4" },
    { name: "Digital Marketing", color: "#10b981" },
    { name: "SEO", color: "#ec4899" },
  ], []);

  // Compute spherical coordinates distribution (Fibonacci sphere distribution)
  const items = useMemo(() => {
    const radius = 3.6;
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

    return skillsList.map((skill, i) => {
      const y = 1 - (i / (skillsList.length - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius at y

      const theta = phi * i; // golden angle increment

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...skill,
        position: new THREE.Vector3(x * radius, y * radius, z * radius)
      };
    });
  }, [skillsList]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central energy node */}
      <mesh>
        <sphereGeometry args={[0.7, 24, 24]} />
        <meshStandardMaterial
          color="#00f3ff"
          emissive="#a855f7"
          emissiveIntensity={1.5}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Orbiting skill badges */}
      {items.map((item) => (
        <SkillBadge
          key={item.name}
          position={item.position}
          text={item.name}
          color={item.color}
          onSelect={onActiveSkill}
        />
      ))}
    </group>
  );
}
