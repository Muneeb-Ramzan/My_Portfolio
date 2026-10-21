import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function CyberRing({ radius = 2.4, color = '#00f3ff', speed = 0.5, tube = 0.02, tiltX = 0, tiltY = 0 }) {
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z += delta * speed;
    ringRef.current.rotation.x += delta * (speed * 0.3);
  });

  return (
    <group rotation={[tiltX, tiltY, 0]}>
      <mesh ref={ringRef}>
        <torusGeometry args={[radius, tube, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          roughness={0.2}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>
    </group>
  );
}
