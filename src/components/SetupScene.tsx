"use client";

import { Float, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

function DeskRig() {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.45) * 0.14;
  });

  return (
    <Float speed={1.2} floatIntensity={0.45} rotationIntensity={0.2}>
      <group ref={ref} position={[0, -0.55, 0]}>
        <mesh position={[0, -0.72, 0]}>
          <boxGeometry args={[4.7, 0.14, 1.8]} />
          <meshStandardMaterial color="#111827" metalness={0.78} roughness={0.22} />
        </mesh>
        {[-1.35, 0, 1.35].map((x, index) => (
          <mesh key={x} position={[x, 0.12, -0.42]} rotation={[0, (index - 1) * -0.18, 0]}>
            <boxGeometry args={[1.12, 0.75, 0.06]} />
            <meshStandardMaterial
              color="#05070d"
              emissive={index === 0 ? "#55f0ff" : index === 1 ? "#9b7cff" : "#ff3df2"}
              emissiveIntensity={0.28}
            />
          </mesh>
        ))}
        <mesh position={[0, -0.56, 0.42]}>
          <boxGeometry args={[1.8, 0.05, 0.48]} />
          <meshBasicMaterial color="#55f0ff" transparent opacity={0.22} />
        </mesh>
        <mesh position={[1.9, -0.5, 0.35]}>
          <boxGeometry args={[0.42, 0.55, 0.42]} />
          <meshStandardMaterial color="#0b1120" emissive="#b6ff63" emissiveIntensity={0.16} />
        </mesh>
      </group>
    </Float>
  );
}

export function SetupScene() {
  return (
    <div className="h-[380px] w-full sm:h-[520px]">
      <Canvas className="!h-full !w-full" camera={{ position: [0, 0.3, 5.2], fov: 45 }} dpr={[1, 1.6]} gl={{ antialias: true }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[4, 5, 4]} intensity={1.2} />
        <pointLight position={[-2, 1, 2]} color="#55f0ff" intensity={6} />
        <pointLight position={[2, -1, 2]} color="#ff3df2" intensity={6} />
        <DeskRig />
        <Sparkles count={90} scale={[5, 3, 3]} size={2} speed={0.2} color="#55f0ff" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.18} />
      </Canvas>
    </div>
  );
}

