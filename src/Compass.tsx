import './Compass.css'

import React from 'react'
import { useMap } from 'react-map-gl'
import {
  deduceCompassSize,
  deducePerspective,
  isUndefined,
  joinClassNames
} from './lib'
import { useMapOrientation } from './useMapOrientation.hook'

interface CompassProps {
  mapId?: string
  size?: 'sm' | 'md' | 'lg'
  visualizePitch?: boolean
  wrapperClass?: string
  onIdleClick?: () => void
}

function Compass(props: CompassProps) {
  const { visualizePitch = false, size = 'md', mapId = 'current' } = props

  const { [mapId]: map } = useMap()
  const [bearing, pitch] = useMapOrientation(mapId, visualizePitch)

  const handleNorthIdleClick = () => {
    if (isUndefined(props.onIdleClick)) {
      map?.setBearing(0)
      map?.setPitch(0)
    } else {
      props.onIdleClick()
    }
  }

  const perspective = deducePerspective(size)

  const compassStyle = {
    '--compass-size': deduceCompassSize(size),
    transform: joinClassNames(
      `rotate(${bearing}deg)`,
      visualizePitch ? `rotateX(${pitch}deg)` : ''
    )
  }

  return (
    <div
      className={joinClassNames(props.wrapperClass, 'compass-wrapper')}
      style={{ perspective }}
    >
      <div className="compass" style={compassStyle} data-size={size}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="inner-face" />
        <div className="needlde" onClick={handleNorthIdleClick} />
      </div>
    </div>
  )
}

export default Compass
