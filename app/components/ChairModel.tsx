'use client';

import { useRef } from 'react'; // 1. Potřebujeme ref pro přístup k objektu
import { useFrame } from '@react-three/fiber'; // 2. Loop pro animaci
import { useGLTF, Float } from '@react-three/drei';
import * as THREE from 'three'; // 3. Matematika pro plynulý pohyb (Lerp)

export function ChairModel() {
  const { scene } = useGLTF('/Models/myBarberChair.glb');
  
  // Vytvoříme referenci na skupinu, kterou budeme otáčet
  const chairRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!chairRef.current) return;

    // Získáme pozici myši (x a y jsou hodnoty od -1 do 1)
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    // Nastavíme cílové úhly rotace
    // Původní natočení Y bylo -0.5, k tomu přičteme pohyb myši
    const targetRotationY = -0.5 + (mouseX * 0.05); // 0.3 = síla rotace do stran
    const targetRotationX = (mouseY * 0.05);        // 0.2 = síla rotace nahoru/dolů

    // Použijeme LERP (Linear Interpolation) pro plynulé dojíždění
    // 0.1 je rychlost "zpoždění" (čím menší číslo, tím plynulejší/pomalejší dojezd)
    chairRef.current.rotation.y = THREE.MathUtils.lerp(chairRef.current.rotation.y, targetRotationY, 0.1);
    chairRef.current.rotation.x = THREE.MathUtils.lerp(chairRef.current.rotation.x, targetRotationX, 0.1);
  });

  return (
    <Float
      speed={2} 
      rotationIntensity={0.5} 
      floatIntensity={0.5} 
      floatingRange={[-0., 0.1]}
    >
      {/* Obalíme model do group, na kterou aplikujeme ref pro otáčení myší */}
      <group ref={chairRef}>
        <primitive 
          object={scene} 
          scale={0.8} 
          // Rotaci už neřešíme tady, ale nahoře v useFrame, 
          // nebo můžeme nechat jen scale
        />
      </group>
    </Float>
  );
}

useGLTF.preload('/Models/myBarberChair.glb');