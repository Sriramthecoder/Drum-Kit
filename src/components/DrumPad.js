import React, { useRef } from 'react';
import { Html } from '@react-three/drei';

const DrumPad = ({ sound, label, keyTrigger, position }) => {
  const mesh = useRef();

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
    mesh.current.scale.set(1.2, 1.2, 1.2);
    setTimeout(() => mesh.current.scale.set(1, 1, 1), 100);
  };

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === keyTrigger) {
        playSound();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [keyTrigger]);

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={playSound}
      scale={[1, 1, 1]}
      castShadow
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={'white'} />
      <mesh
        position={[0, 0, -0.1]}
        scale={[1.1, 1.1, 1]}
      >
        <sphereGeometry args={[1, 25, 25]} />
        <meshStandardMaterial color={'black'} />
      </mesh>
      <Html center>
        <div style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
          <div>{label}</div>
          <div>{keyTrigger}</div>
        </div>
      </Html>
    </mesh>
  );
};

export default DrumPad;
