import "./styles.css";

import * as THREE from "three";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Sky, Environment, OrbitControls } from "@react-three/drei";
import { SSAOPass } from "three-stdlib";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

import TransfoModel from "./TransfoModel";
import TransfoModelOptimized from "./TransfoModelOptimized";
import HDR from "./models/adamsbridge.hdr?url";

extend({ SSAOPass });

export default function App() {
    return (
        <Suspense fallback={null}>
            <div className="App">
                <Canvas
                    shadows
                    dpr={[1, 2]}
                    camera={{ position: [0, 0, 20], fov: 35 }}
                >
                    <OrbitControls
                        makeDefault
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 3}
                        enableZoom={true}
                        enablePan={true}
                        zoomSpeed={1}
                        minDistance={250}
                        maxDistance={500}
                        autoRotate={false}
                        autoRotateSpeed={0.7}
                    />
                    {/* <ambientLight intensity={0.25} /> */}
                    {/* <spotLight
                        intensity={1}
                        angle={0.2}
                        penumbra={1}
                        position={[30, 30, 30]}
                        castShadow
                        shadow-mapSize={[512, 512]}
                    /> */}
                    <directionalLight
                        intensity={1}
                        position={[-10, -10, -10]}
                        color="#fdfbd3"
                    />
                    {/* <TransfoModel /> */}
                    <TransfoModelOptimized />
                    <Environment files={HDR} />
                    <Sky />
                </Canvas>
            </div>
        </Suspense>
    );
}

/*
<OrbitControls
    makeDefault
    minPolarAngle={Math.PI / 3}
    maxPolarAngle={Math.PI / 3}
    enableZoom={true}
    enablePan={true}
    zoomSpeed={0.3}
/>
*/
