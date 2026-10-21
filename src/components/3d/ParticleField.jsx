import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 1200 }) {
  const pointsRef = useRef();

  const [positions, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const initPos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Spread across a wide curved grid plane
      const u = (i % 40) / 40;
      const v = Math.floor(i / 40) / 30;

      const x = (u - 0.5) * 26;
      const y = (v - 0.5) * 20 - 2;
      const z = (Math.random() - 0.5) * 8 - 4;

      pos[i3] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;

      initPos[i3] = x;
      initPos[i3 + 1] = y;
      initPos[i3 + 2] = z;
    }
    return [pos, initPos];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    const { pointer } = state;
    const array = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = initialPositions[i3];
      const y = initialPositions[i3 + 1];

      // Wave calculation
      const wave = Math.sin(time * 1.5 + x * 0.4 + y * 0.3) * 0.8;
      const mouseDist = Math.hypot(pointer.x * 10 - x, pointer.y * 10 - y);
      const mouseEffect = Math.max(0, 1 - mouseDist / 6) * 1.2;

      array[i3 + 2] = initialPositions[i3 + 2] + wave + mouseEffect * 1.5;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#00f3ff"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
