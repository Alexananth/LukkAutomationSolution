import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';

const Ball = () => {
  const ref = useRef();
  const { viewport, mouse } = useThree();

  useFrame(() => {
    if (ref.current) {
      const target = new Vector3(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      );
      ref.current.position.lerp(target, 0.1);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial emissive="#75C4C4" emissiveIntensity={3} toneMapped={false} />
    </mesh>
  );
};

const CursorFollow = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100]">
      <Canvas orthographic>
        <Suspense fallback={null}>
          <Ball />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CursorFollow;
