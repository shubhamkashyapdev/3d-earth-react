import React, { Fragment } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls } from '@react-three/drei'

import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg'
import EarthClouds from '../../assets/textures/8k_earth_clouds.jpg'
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg'
import EarthNormal from '../../assets/textures/8k_earth_normal_map.jpg'
import EarthSpecular from '../../assets/textures/8k_earth_specular_map.jpg'
import * as THREE from 'three'

const Earth = (props) => {
  const [colorMap, normalMap, cloudsMap, specularMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthClouds, EarthSpecular, EarthNormal]
  )
  return (
    <Fragment>
      <ambientLight intensity={1} />
      <mesh>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        {/* geomatery */}
        <sphereGeometry args={[1, 32, 32]} />
        {/* material */}
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />

        {/* Orbit Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </Fragment>
  )
}

export default Earth
