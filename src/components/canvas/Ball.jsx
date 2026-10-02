import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.1]} intensity={0.8} />
      <mesh castShadow={false} receiveShadow={false} scale={2.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#121218'
          roughness={0.3}
          metalness={0.6}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ powerPreference: "high-performance", antialias: true }}
      camera={{ position: [0, 0, 5], fov: 60 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
