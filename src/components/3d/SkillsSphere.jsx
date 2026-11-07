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
              emissiveIntensity={hovered ? 2.8 : 1.4}
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
    { name: "Artificial Intelligence", color: "#00f3ff" },
    { name: "Machine Learning", color: "#fbbf24" },
    { name: "Deep Learning", color: "#a855f7" },
    { name: "Generative AI", color: "#ff007f" },
    { name: "RAG", color: "#00f3ff" },
    { name: "LangChain", color: "#8b5cf6" },
    { name: "LangGraph", color: "#c084fc" },
    { name: "AI Agents", color: "#00ff9d" },
    { name: "Chatbot Development", color: "#38bdf8" },
    { name: "Pandas", color: "#f43f5e" },
    { name: "NumPy", color: "#60a5fa" },
    { name: "HTML", color: "#f97316" },
    { name: "CSS", color: "#06b6d4" },
  ], []);

  // Compute spherical coordinates distribution (Fibonacci sphere distribution)
  const items = useMemo(() => {
    const radius = 3.6;
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians

    return skillsList.map((skill, i) => {
      const y = 1 - (i / (skillsList.length - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      return {
        ...skill,
        position: new THREE.Vector3(x * radius, y * radius, z * radius)
      };
    });
  }, [skillsList]);

  // Connect orbital filament lines between nodes
  const connectionLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const dist = items[i].position.distanceTo(items[j].position);
        if (dist < 2.5) {
          lines.push([items[i].position, items[j].position]);
        }
      }
    }
    return lines;
  }, [items]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.22;
    groupRef.current.rotation.x = Math.sin(groupRef.current.rotation.y * 0.4) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Central Pulsing Holographic Core for the sphere */}
      <mesh>
        <sphereGeometry args={[1.1, 24, 24]} />
        <meshBasicMaterial
          color="#00f3ff"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Synaptic Orbital Lines connecting skills */}
      {connectionLines.map(([p1, p2], idx) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([p1, p2]);
        return (
          <lineSegments key={`sk-line-${idx}`} geometry={geometry}>
            <lineBasicMaterial
              color="#38bdf8"
              transparent
              opacity={0.2}
              blending={THREE.AdditiveBlending}
            />
          </lineSegments>
        );
      })}

      {/* Floating 3D Skill Badges */}
      {items.map((item, idx) => (
        <SkillBadge
          key={idx}
          position={item.position}
          text={item.name}
          color={item.color}
          onSelect={onActiveSkill}
        />
      ))}
    </group>
  );
}
