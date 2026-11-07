import { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { soundFX } from '../../utils/audio';

export default function FloatingHologram() {
  const groupRef = useRef();
  const brainMeshRef = useRef();
  const wireframeRef = useRef();
  const innerCoreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const { viewport } = useThree();
  const isMobile = viewport.width < 7;

  // Position: On desktop, position on the right half ([2.2, 0.1, 0]), on mobile slightly above center
  const targetPosition = isMobile ? [0, 1.3, -1] : [2.3, 0.2, 0];
  const targetScale = isMobile ? 0.8 : 1.05;

  // Synaptic nodes distributed along a Fibonacci sphere
  const synapses = useMemo(() => {
    const nodes = [];
    const count = 22;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const radius = 2.05 + (Math.sin(i * 1.8) * 0.18);
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      nodes.push({
        position: new THREE.Vector3(x, y, z),
        pulseOffset: i * 0.4
      });
    }
    return nodes;
  }, []);

  // Neural synaptic connecting lines between nearby nodes
  const synapticLines = useMemo(() => {
    const lines = [];
    for (let i = 0; i < synapses.length; i++) {
      for (let j = i + 1; j < synapses.length; j++) {
        const dist = synapses[i].position.distanceTo(synapses[j].position);
        if (dist < 1.7) {
          lines.push([synapses[i].position, synapses[j].position]);
        }
      }
    }
    return lines;
  }, [synapses]);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    const { pointer } = state;

    if (groupRef.current) {
      // Smooth interactive mouse tilt
      const targetRotY = pointer.x * 0.45;
      const targetRotX = -pointer.y * 0.35;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    }

    if (brainMeshRef.current) {
      brainMeshRef.current.rotation.y += delta * (hovered ? 0.9 : 0.4);
      brainMeshRef.current.rotation.z = Math.sin(time * 0.7) * 0.15;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.2;
      wireframeRef.current.rotation.y += delta * 0.25;
      wireframeRef.current.rotation.z = Math.cos(time * 0.5) * 0.12;
    }

    if (innerCoreRef.current) {
      const pulseSpeed = hovered ? 6 : 3.5;
      const pulseAmp = hovered ? 0.28 : 0.16;
      const scale = 1 + Math.sin(time * pulseSpeed) * pulseAmp;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * (hovered ? 0.7 : 0.4);
      ring1Ref.current.rotation.x = Math.sin(time * 0.8) * 0.25;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * (hovered ? 0.6 : 0.35);
      ring2Ref.current.rotation.z = Math.cos(time * 0.6) * 0.3;
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * (hovered ? 0.8 : 0.45);
    }
  });

  const handleClick = (e) => {
    e.stopPropagation();
    setClicked(!clicked);
    soundFX.playClick();
  };

  const primaryColor = clicked ? '#ff007f' : (hovered ? '#00f3ff' : '#00f3ff');
  const accentColor = clicked ? '#00f3ff' : (hovered ? '#ff007f' : '#a855f7');
  const emissiveColor = clicked ? '#ff007f' : (hovered ? '#00f3ff' : '#0284c7');

  return (
    <group position={targetPosition} scale={targetScale}>
      <Float speed={2.4} rotationIntensity={0.8} floatIntensity={1.4}>
        <group
          ref={groupRef}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            soundFX.playHover();
          }}
          onPointerOut={() => setHovered(false)}
          onClick={handleClick}
          className="cursor-pointer"
        >
          {/* Outer Geometric Neural Cage */}
          <mesh ref={wireframeRef}>
            <icosahedronGeometry args={[2.35, 1]} />
            <meshBasicMaterial
              color={primaryColor}
              wireframe
              transparent
              opacity={hovered ? 0.5 : 0.28}
            />
          </mesh>

          {/* Synaptic Connection Lines */}
          {synapticLines.map(([p1, p2], idx) => {
            const points = [p1, p2];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            return (
              <lineSegments key={`syn-line-${idx}`} geometry={geometry}>
                <lineBasicMaterial
                  color={accentColor}
                  transparent
                  opacity={hovered ? 0.45 : 0.22}
                  blending={THREE.AdditiveBlending}
                />
              </lineSegments>
            );
          })}

          {/* Pulsating Synaptic Nodes around Neural Field */}
          {synapses.map((syn, idx) => (
            <mesh key={`syn-node-${idx}`} position={syn.position}>
              <sphereGeometry args={[0.075, 12, 12]} />
              <meshStandardMaterial
                color={primaryColor}
                emissive={primaryColor}
                emissiveIntensity={hovered ? 3.5 : 2.2}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
          ))}

          {/* Central Glowing AI Neural Brain Core */}
          <mesh ref={brainMeshRef} scale={hovered ? 1.15 : 1.0}>
            <dodecahedronGeometry args={[1.4, 2]} />
            <MeshDistortMaterial
              color={primaryColor}
              emissive={emissiveColor}
              emissiveIntensity={hovered ? 1.5 : 0.95}
              roughness={0.12}
              metalness={0.88}
              distort={hovered ? 0.45 : 0.28}
              speed={3.2}
              wireframe={false}
            />
          </mesh>

          {/* High-energy Quantum Nucleus */}
          <mesh ref={innerCoreRef}>
            <sphereGeometry args={[0.62, 28, 28]} />
            <meshBasicMaterial
              color="#ffffff"
              transparent
              opacity={hovered ? 0.95 : 0.8}
            />
          </mesh>

          {/* Triple Cybernetic Energy Rings */}
          <group ref={ring1Ref}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <ringGeometry args={[1.9, 1.95, 64]} />
              <meshBasicMaterial
                color={primaryColor}
                side={THREE.DoubleSide}
                transparent
                opacity={hovered ? 0.8 : 0.55}
              />
            </mesh>
          </group>

          <group ref={ring2Ref}>
            <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
              <ringGeometry args={[2.15, 2.19, 64]} />
              <meshBasicMaterial
                color={accentColor}
                side={THREE.DoubleSide}
                transparent
                opacity={hovered ? 0.75 : 0.45}
              />
            </mesh>
          </group>

          <group ref={ring3Ref}>
            <mesh rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
              <ringGeometry args={[2.4, 2.43, 64]} />
              <meshBasicMaterial
                color="#00ff9d"
                side={THREE.DoubleSide}
                transparent
                opacity={hovered ? 0.65 : 0.35}
              />
            </mesh>
          </group>

          {/* Dynamic Light Emission from the AI Neural Core */}
          <pointLight
            color={primaryColor}
            intensity={hovered ? 5.5 : 3.2}
            distance={14}
          />
          <pointLight
            color={accentColor}
            intensity={hovered ? 4.0 : 2.0}
            distance={10}
            position={[0, -1, 0]}
          />
        </group>
      </Float>
    </group>
  );
}
