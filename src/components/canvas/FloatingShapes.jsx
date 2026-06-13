import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleSwarm(props) {
  const ref = useRef();
  // Generate random points in a sphere
  const sphere = random.inSphere(new Float32Array(3000), { radius: 10 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingShapesCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-transparent">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <ParticleSwarm />
        </Float>
      </Canvas>
    </div>
  );
}

export default FloatingShapesCanvas;
