// == Import
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, ScrollControls, Scroll } from '@react-three/drei';
import Images from 'src/components/Images/Images';
import Nav from 'src/components/Nav/Nav';
import Bio from 'src/components/Bio';

import './styles.scss';

function App() {
  return (
    <div id="app" className="app">
      <Nav />
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll>
              <Images />
            </Scroll>
            <Scroll html>
              <h1 className="home" style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>Chris</h1>
              <h1 className="home" style={{ position: 'absolute', top: '120vh', left: '30vw' }}>Verichon</h1>
              <h1 className="home" style={{ position: 'absolute', top: '210vh', left: '0.5vw', fontSize: '7vw' }}>Développeur Web</h1>
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
      <Bio />
    </div>
  );
}

export default App;
