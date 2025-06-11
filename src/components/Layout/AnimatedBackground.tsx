import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";

function Stars(props: any) {
  const { theme } = useTheme();
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() => {
    // Ensure `random` returns a non-zero value
    const nonZeroRandom = () => {
      let val;
      do {
        val = Math.random() - 0.5;
      } while (val === 0);
      return val;
    };

    return new Float32Array(
      Array.from({ length: 5000 * 3 }, () => 4 * nonZeroRandom())
    );
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 75;
  });

  return (
    <group rotation={[0, 0, Math.PI / 2]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={theme === "dark" ? "#ffffff" : "#4060dd"}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function AnimatedBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
}
