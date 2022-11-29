/* eslint-disable comma-dangle */
import { useBox } from '@react-three/cannon';
import { useState } from 'react';
import { useStore } from '../hooks/useStore.js';
import * as textures from '../images/textures.js';

const Cube = ({ id, position, texture }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { removeCube } = useStore((state) => state);
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }));

  const activeTexture = textures[texture + 'Texture'];

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        if (e.altKey) {
          // const [x, y, z] = ref.current.position;
          // removeCube(x, y, z);
          removeCube(id);
        }
      }}
    >
      <boxBufferGeometry attach='geometry' />
      <meshStandardMaterial color={isHovered ? 'grey' : 'white'} map={activeTexture} attach='material' />
    </mesh>
  );
};

export default Cube;
