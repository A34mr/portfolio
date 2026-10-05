import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.08;
    mesh.current.rotation.y += delta * 0.14;
    mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, pointer.y * 0.18, 0.025);
    mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, pointer.x * 0.12, 0.025);
  });

  return (
    <Float speed={1.15} rotationIntensity={0.22} floatIntensity={0.55}>
      <mesh ref={mesh} scale={1.55}>
        <icosahedronGeometry args={[1.25, 5]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.65}
          chromaticAberration={0.08}
          anisotropy={0.25}
          distortion={0.18}
          distortionScale={0.3}
          temporalDistortion={0.08}
          roughness={0.12}
          transmission={1}
          color="#c6d9ff"
          background={new THREE.Color('#090b12')}
        />
      </mesh>
    </Float>
  );
}

function SceneContent() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (group.current) group.current.position.y = Math.sin(clock.elapsedTime * 0.45) * 0.08;
  });
  return (
    <group ref={group}>
      <ambientLight intensity={0.45} />
      <pointLight position={[2.5, 3, 4]} intensity={20} color="#98b7ff" distance={8} />
      <pointLight position={[-3, -1, 1]} intensity={16} color="#ff735c" distance={7} />
      <Orb />
      <Sparkles count={90} scale={7} size={1.8} speed={0.25} color="#c5d7ff" />
    </group>
  );
}

export function PortfolioScene() {
  if (typeof window !== 'undefined' && typeof ResizeObserver === 'undefined') {
    return <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,#273453,transparent_32%)]" />;
  }

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="!absolute inset-0"
      fallback={<div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,#273453,transparent_32%)]" />}
    >
      <color attach="background" args={['#090b12']} />
      <Environment preset="night" />
      <SceneContent />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} />
    </Canvas>
  );
}
