import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";

function DistortedOrb() {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = t * 0.12;
    group.current.rotation.x = Math.sin(t * 0.15) * 0.08;
  });
  return (
    <group ref={group}>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.45}>
        <Sphere args={[1, 64, 64]} scale={2.65} position={[0.6, 0.2, 0]}>
          <MeshDistortMaterial
            color="#6366f1"
            emissive="#312e81"
            emissiveIntensity={0.2}
            roughness={0.15}
            metalness={0.85}
            distort={0.38}
            speed={2.2}
          />
        </Sphere>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#030306"]} />
      <fog attach="fog" args={["#030306", 12, 45]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[10, 14, 12]} intensity={1.1} color="#c4b5fd" />
      <directionalLight position={[-8, -4, -6]} intensity={0.35} color="#22d3ee" />
      <pointLight position={[-12, 8, 4]} intensity={0.5} color="#a78bfa" />
      <Suspense fallback={null}>
        <Stars
          radius={90}
          depth={48}
          count={2200}
          factor={3.5}
          saturation={0}
          fade
          speed={0.35}
        />
        <DistortedOrb />
      </Suspense>
    </>
  );
}

export default function HeroBackdrop() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqWidth = window.matchMedia("(max-width: 768px)");
    const apply = () => {
      setReduceMotion(mqMotion.matches);
      setIsNarrow(mqWidth.matches);
    };
    apply();
    mqMotion.addEventListener("change", apply);
    mqWidth.addEventListener("change", apply);
    return () => {
      mqMotion.removeEventListener("change", apply);
      mqWidth.removeEventListener("change", apply);
    };
  }, []);

  const show3d = !reduceMotion;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-mesh-glow" />
      <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-accent-violet/15 blur-[120px]" />
      <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-accent-cyan/10 blur-[100px]" />

      {show3d && (
        <Canvas
          className="!absolute inset-0 h-full w-full"
          camera={{ position: [0, 0, 9], fov: 42 }}
          gl={{
            alpha: false,
            antialias: !isNarrow,
            powerPreference: "high-performance",
          }}
          dpr={isNarrow ? [1, 1.25] : [1, 1.75]}
        >
          <Scene />
        </Canvas>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-void/20 via-ink/75 to-void" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030306_85%)]" />
    </div>
  );
}
