import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function Plane(props) {

  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => {
    return
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <planeGeometry args={[5, 5, 13, 13]} />
      <meshBasicMaterial color={hovered ? 'hotpink' : 'green'} wireframe />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas
      style={{ width: '400px', height: '300px', background: 'black' }}
    >
      <Plane position={[0, 0, 0]} />
    </Canvas>
  )
}
