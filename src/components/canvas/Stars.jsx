import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ color = "#ffffff", size = 0.0022, speed = 0.8, ...props }) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    // 2,200 points is optimal for dense starry aesthetics without GPU bottleneck
    const coords = random.inSphere(new Float32Array(2202), { radius: 1.2 });
    for (let i = 0; i < coords.length; i++) {
      if (isNaN(coords[i])) coords[i] = 0;
    }
    return coords;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= (delta / 16) * speed;
      ref.current.rotation.y -= (delta / 20) * speed;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.85}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = ({
  className = "w-full h-full fixed inset-0 z-[-1] pointer-events-none",
  color = "#ffffff",
  size = 0.0022,
  speed = 0.8,
}) => {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.25]}
        gl={{ powerPreference: "high-performance", antialias: false }}
      >
        <Suspense fallback={null}>
          <Stars color={color} size={size} speed={speed} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
