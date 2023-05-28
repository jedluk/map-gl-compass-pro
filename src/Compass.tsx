import './style/Compass.css'

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
  size?: 'xs' | 'sm' | 'md' | 'lg'
  visualizePitch?: boolean
  wrapperClass?: string
  onNeedleClick?: () => void
}

export function Compass(props: CompassProps) {
  const { visualizePitch = false, size = 'md', mapId = 'current' } = props

  const { [mapId]: map } = useMap()
  const [bearing, pitch] = useMapOrientation(mapId, visualizePitch)

  const handleNorthNeedleClick = () => {
    if (isUndefined(props.onNeedleClick)) {
      map?.setBearing(0)
      map?.setPitch(0)
    } else {
      props.onNeedleClick()
    }
  }

  const wrapperStyle = {
    perspective: deducePerspective(size)
  }

  const compassStyle = {
    '--compass-size': deduceCompassSize(size),
    transform: joinClassNames(
      `rotate(${bearing}deg)`,
      visualizePitch ? `rotateX(${pitch}deg)` : ''
    )
  }

  return (
    <div
      className={props.wrapperClass ?? 'compass-pro-wrapper'}
      style={wrapperStyle}
    >
      <div data-size={size} className="compass-pro" style={compassStyle}>
        <div className="needle" />
        <div className="needle" />
        <div className="needle" />
        <div className="needle" />
        <div className="needle" />
        <div className="needle" />
        <div className="inner-face" />
        {/* {size !== 'xs' && (
          <div className="needlde-north" onClick={handleNorthNeedleClick} />
        )} */}
      </div>
    </div>
  )
}
