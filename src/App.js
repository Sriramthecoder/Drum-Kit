import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DrumPad from './components/DrumPad';
import './App.css';

const sounds = [
  { label: 'Kick', keyTrigger: 'Q', sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { label: 'Snare', keyTrigger: 'W', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
  { label: 'Hi-Hat', keyTrigger: 'E', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  { label: 'Low Tom', keyTrigger: 'A', sound: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
  { label: 'Mid Tom', keyTrigger: 'S', sound: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
  { label: 'Crash', keyTrigger: 'Z', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { label: 'Hi-Hat Pedal', keyTrigger: 'C', sound: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },
];

function App() {
  return (
    <div className="App">
      <h1>React Drumkit</h1>
      <Canvas style={{ height: '100vh', width: '100vw' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {sounds.map((sound, index) => (
          <DrumPad
            key={index}
            sound={sound.sound}
            label={sound.label}
            keyTrigger={sound.keyTrigger}
            position={[(index % 3) * 2 - 2, Math.floor(index / 3) * 2 - 2, 0]} 
          />
        ))}
      </Canvas>
    </div>
  );
}

export default App;
