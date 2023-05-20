import './Compass.css'

import React, { useEffect, useState } from 'react'
import { useMap } from 'react-map-gl'
import { isUndefined, joinClassNames } from './lib'

interface CompassProps {
  mapId?: string
  size?: 'sm' | 'md' | 'lg'
  visualizePitch?: boolean
  wrapperClass?: string
}

function Compass(props: CompassProps) {
  const { visualizePitch = false, size = 'md', mapId = 'current' } = props
  const { [mapId]: map } = useMap()

  const [rotation, setRotation] = useState(map?.getBearing() ?? 0)
  const [pitch, setPitch] = useState(map?.getPitch() ?? 0)

  useEffect(() => {
    if (isUndefined(map)) {
      return
    }

    const handleRotate = () => setRotation(-map.getBearing())

    map.on('rotate', handleRotate)
    return () => {
      map.off('rotate', handleRotate)
    }
  }, [map])

  useEffect(() => {
    if (isUndefined(map) || !visualizePitch) {
      return
    }

    const handlePitch = () => setPitch(map.getPitch())

    map.on('pitch', handlePitch)

    return () => {
      map.off('pitch', handlePitch)
    }
  }, [map, visualizePitch])

  const transform = [
    `rotate(${rotation}deg)`,
    visualizePitch && `rotateX(${pitch}deg)`
  ]
    .filter(Boolean)
    .join(' ')

  const compassStyle = {
    '--compass-size': size === 'sm' ? '25px' : size === 'md' ? '75px' : '150px',
    transform: transform
  }

  return (
    <div className={joinClassNames('compass-wrapper', props.wrapperClass)}>
      <div className="compass" style={compassStyle}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="inner-face" />
        <div className="needlde" />
      </div>
    </div>
  )
}

export default Compass
