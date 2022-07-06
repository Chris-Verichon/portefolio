import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, ScrollControls, Scroll } from '@react-three/drei';
import ImagesMobile from 'src/components/HomeMobile/ImagesMobile/ImagesMobile';

import './homeMobile.scss';

const HomeMobile = () => (
  <div className="homeMobile">
    <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ScrollControls damping={4} pages={3}>
          <Scroll>
            <ImagesMobile />
          </Scroll>
          <Scroll html>
            <h1 className="home" style={{ position: 'absolute', top: '51vh', left: '0.1em' }}>Chris</h1>
            <h1 className="home" style={{ position: 'absolute', top: '93vh', left: '35vw' }}>Verichon</h1>
            <h1 className="home" style={{ position: 'absolute', top: '228vh', left: '0.1em', fontSize: '4em' }}>Développeur Web Fullstack</h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  </div>
);

export default HomeMobile;
