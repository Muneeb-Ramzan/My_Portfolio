import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import FloatingHologram from './FloatingHologram';
import ParticleField from './ParticleField';
import SpaceDust from './SpaceDust';

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 7.8]} fov={50} />

        {/* Ambient & Rim Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-6, -4, -2]} color="#a855f7" intensity={3} />
        <pointLight position={[6, 4, 2]} color="#00f3ff" intensity={3.5} />
        <pointLight position={[0, -6, 4]} color="#ff007f" intensity={2.5} />

        {/* Interactive 3D AI Brain & Holographic Neural Sphere */}
        <FloatingHologram />

        {/* 3D Visual Particle Field & Starfield Space Dust */}
        <SpaceDust count={300} />
        <ParticleField count={1100} />

        {/* Interactive Smooth Orbit Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.5}
          rotateSpeed={0.55}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
