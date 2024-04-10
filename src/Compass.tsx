import 'maplibre-compass-pro/dist/style.css'
import { Compass, CompassProps } from 'maplibre-compass-pro'

import { useEffect, useRef } from 'react'
import { useControl } from 'react-map-gl'
import { ControlPosition } from 'maplibre-gl'

export default function CompassComponent(
  props: CompassProps & { position?: ControlPosition }
) {
  const { size, visualizePitch, onClick, position, displayDirection } = props

  const compassRef = useRef(new Compass({ size, visualizePitch, onClick }))

  useControl(() => compassRef.current, { position })

  useEffect(() => {
    if (size) {
      compassRef.current.changeSize(size)
    }
  }, [size])

  useEffect(() => {
    if (!displayDirection) {
      return
    }
    const compass = compassRef.current
    compass.toggle()
    return () => compass.toggle()
  }, [displayDirection])

  return null
}
