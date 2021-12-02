import React, { Fragment } from 'react'
import { TextureLoader } from '@react-three/fiber'

import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg'
import EarthClouds from '../../assets/textures/8k_earth_clouds.jpg'
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg'
import EarthNormal from '../../assets/textures/8k_earth_normal_map.jpg'
import EarthSpecular from '../../assets/textures/8k_earth_specular_map.jpg'

const Earth = (props) => {
  const [colorMap, normalMap, cloudsMap, specularMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthClouds, EarthSpecular, EarthNormal]
  )
  return (
    <Fragment>
      <ambientLight intensity={0.5} />
      <mesh>
        {/* geomatery */}
        <sphereGeometry args={[1, 32, 32]} />
        {/* material */}
        <meshPhongMaterial color='red' />
      </mesh>
    </Fragment>
  )
}

export default Earth
