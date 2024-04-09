import 'maplibre-compass-pro/dist/style.css'
import { Compass, CompassProps } from 'maplibre-compass-pro'

import { useEffect, useRef } from 'react'
import { useControl } from 'react-map-gl'
import { ControlPosition } from 'maplibre-gl'

export default function CompassComponent(
  props: CompassProps & { position?: ControlPosition }
) {
  const { size, visualizePitch, onClick, position, displayDirection } = props

  const { current: compass } = useRef(
    new Compass({ size, visualizePitch, onClick })
  )

  useControl(() => compass, { position })

  useEffect(() => {
    if (size) {
      compass.changeSize(size)
    }
  }, [size])

  useEffect(() => {
    if (!displayDirection) {
      return
    }
    compass.toggle()
    return () => compass.toggle()
  }, [displayDirection])

  return null
}
