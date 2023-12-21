'use client'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Sky, PerspectiveCamera } from "@react-three/drei";
import Park from '../models/Park';
import Skate from '../models/Skt';
export default function Scene() {
    return (
        <Canvas>
            <PerspectiveCamera makeDefault position={[0, 1, 2]} fov={70} />
            <ambientLight intensity={2} />
            <spotLight position={[20, 100, 20]} angle={0.30} penumbra={1} />
            <OrbitControls />
            <Suspense fallback={null}>
                <Sky sunPosition={[100,100,20]}></Sky>
                
                <Skate />
            </Suspense>
        </Canvas>
    );
}