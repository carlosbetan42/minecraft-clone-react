import create from 'zustand';
import { nanoid } from 'nanoid';

export const useStore = create(set => ({
  texture: 'dirt',
  cubes: [{
    id: nanoid(),
    pos: [1, 1, 1],
    texture: 'dirt'
  }, {
    id: nanoid(),
    pos: [1, 5, 1],
    texture: 'log'
  }],
  addCube: (x, y, z) => {
    set(state => ({
      cubes: [...state.cubes, {
        id: nanoid(),
        pos: [x, y, z],
        texture: state.texture
      }]
    }));
  },
  removeCube: (id /* x, y, z */) => {
    set(state => ({
      cubes: state.cubes.filter(cube => {
        return cube.id !== id;
        // const [X, Y, Z] = cube.pos;
        // return X !== x || Y !== y || Z !== z;
      })
    }));
  },
  setTexture: (texture) => {
    set(() => ({ texture }));
  },
  saveWorld: () => { },
  resetWorld: () => { }
}));
