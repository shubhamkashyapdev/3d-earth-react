import React, { Fragment } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls, Stars } from '@react-three/drei'

import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg'
import EarthClouds from '../../assets/textures/8k_earth_clouds.jpg'
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg'
import EarthNormal from '../../assets/textures/8k_earth_normal_map.jpg'
import EarthSpecular from '../../assets/textures/8k_earth_specular_map.jpg'
import * as THREE from 'three'

const Earth = (props) => {
  const [colorMap, normalMap, specularMap, cloudMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormal, EarthSpecular, EarthClouds]
  )
  return (
    <Fragment>
      <ambientLight intensity={1} />

      <pointLight color='#fffed' position={[2, 0, 2]} intensity={1.2} />

      {/* adding stars to our scene */}
      <Stars radius={300} depth={60} count={10000} factor={7} fade={true} />
      <mesh>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudMap}
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
