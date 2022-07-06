/* eslint-disable semi */
import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Image, useScroll } from '@react-three/drei';

import images9 from 'src/assets/images/image9.jpg';
import images10 from 'src/assets/images/image10.jpg';
import images12 from 'src/assets/images/image12.jpg';
import images13 from 'src/assets/images/wallpaperbetter.jpg';
import voyage1 from 'src/assets/images/image13.jpg';

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + (data.range(0, 1 / 3) / 3)
    group.current.children[1].material.zoom = 1 + (data.range(0, 1 / 3) / 3)
    group.current.children[2].material.zoom = 1 + (data.range(1.15 / 3, 1 / 3) / 3)
    group.current.children[3].material.zoom = 1 + (data.range(1.15 / 3, 1 / 3) / 2)
    group.current.children[4].material.zoom = 1 + (data.range(1.25 / 3, 1 / 3) / 1)
    group.current.children[5].material.zoom = 1 + (data.range(1.8 / 3, 1 / 3) / 3)
    group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    group.current.children[6].material.zoom = 1 + ((1 - data.range(2 / 3, 1 / 3)) / 3)
  });
  return (
    <group ref={group}>
      <Image position={[-1.5, 0, 0]} scale={[8, height, 1]} url={images9} />
      <Image position={[3, 0, 1]} scale={3} url={images12} />
      <Image position={[-2.5, -height, 2]} scale={[1, 3, 1]} url={images10} />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url={images10} />
      <Image position={[0.6, -height, 4]} scale={1} url={images10} />
      <Image position={[1.2, -height * 1.5, 3]} scale={[3.5, 3, 1]} url={voyage1} />
      <Image
        position={[0, (-height * 2) - (height / 4), 0]}
        scale={[width, height / 2, 1]}
        url={images13}
      />
    </group>
  );
}

export default Images;
