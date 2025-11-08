import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function RobotArm(props) {
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/robot-arm/model.gltf');
  const group = useRef();

  // A subtle floating animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if(group.current) {
      group.current.position.y = Math.sin(t) * 0.1;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Material} material-color="#75C4C4" />
            </group>
        </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/robot-arm/model.gltf');

export default RobotArm;
