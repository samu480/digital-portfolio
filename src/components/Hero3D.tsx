"use client";

import { Float, OrbitControls, Sparkles, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Group, Mesh } from "three";

function DeveloperDesk() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.75) * 0.04;
  });

  return (
    <group ref={group} rotation={[0.05, -0.18, 0]}>
      <mesh position={[0, -1.35, 0]}>
        <boxGeometry args={[4.8, 0.16, 2]} />
        <meshStandardMaterial color="#111827" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[-1.25, -0.35, -0.55]} rotation={[-0.1, 0.18, 0]}>
        <boxGeometry args={[1.8, 1.05, 0.08]} />
        <meshStandardMaterial color="#05070d" emissive="#55f0ff" emissiveIntensity={0.16} />
      </mesh>
      <mesh position={[1.0, -0.25, -0.55]} rotation={[-0.08, -0.12, 0]}>
        <boxGeometry args={[1.95, 1.18, 0.08]} />
        <meshStandardMaterial color="#05070d" emissive="#9b7cff" emissiveIntensity={0.18} />
      </mesh>
      <mesh position={[-0.12, -1.2, 0.42]}>
        <boxGeometry args={[1.52, 0.05, 0.58]} />
        <meshBasicMaterial color="#55f0ff" transparent opacity={0.24} />
      </mesh>
      <mesh position={[1.7, -1.18, 0.48]}>
        <boxGeometry args={[0.54, 0.08, 0.78]} />
        <meshStandardMaterial color="#0f172a" emissive="#ff3df2" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

function CodePanels() {
  const panelData = useMemo(
    () => [
      { pos: [-2.65, 0.55, -0.2], color: "#55f0ff", text: "next.dev()" },
      { pos: [2.55, 0.75, -0.05], color: "#ff3df2", text: "AI.tools" },
      { pos: [0.1, 1.45, -0.25], color: "#9b7cff", text: "build()" }
    ],
    []
  );

  return (
    <>
      {panelData.map((panel, index) => (
        <Float key={panel.text} speed={1.4 + index * 0.2} floatIntensity={0.75} rotationIntensity={0.25}>
          <group position={panel.pos as [number, number, number]} rotation={[0, index === 1 ? -0.45 : 0.35, 0]}>
            <mesh>
              <boxGeometry args={[1.45, 0.64, 0.035]} />
              <meshStandardMaterial color="#07101e" emissive={panel.color} emissiveIntensity={0.16} transparent opacity={0.86} />
            </mesh>
            <Text position={[0, 0, 0.04]} fontSize={0.12} color="#ffffff" anchorX="center" anchorY="middle">
              {panel.text}
            </Text>
          </group>
        </Float>
      ))}
    </>
  );
}

function RGBRings() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.16;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.16;
  });

  return (
    <mesh ref={ref} rotation={[1.2, 0.2, 0]} position={[0, -0.1, -0.4]}>
      <torusGeometry args={[2.8, 0.01, 10, 180]} />
      <meshBasicMaterial color="#55f0ff" transparent opacity={0.55} />
    </mesh>
  );
}

export function Hero3D() {
  return (
    <div className="h-[430px] w-full sm:h-[560px] lg:h-[680px]">
      <Canvas
        className="!h-full !w-full"
        camera={{ position: [0, 0.25, 5.7], fov: 43 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.68} />
        <directionalLight position={[4, 5, 4]} intensity={1.35} />
        <pointLight position={[-3, 1.5, 2]} intensity={7} color="#55f0ff" />
        <pointLight position={[3, -0.8, 2.2]} intensity={7} color="#ff3df2" />
        <pointLight position={[0, 2.5, 1]} intensity={5} color="#9b7cff" />
        <RGBRings />
        <DeveloperDesk />
        <CodePanels />
        <Sparkles count={120} scale={[6, 4, 3]} size={2.2} speed={0.25} color="#b6ff63" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} />
      </Canvas>
    </div>
  );
}

