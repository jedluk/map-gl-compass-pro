import { useEffect, useState } from 'react'
import { useMap } from 'react-map-gl'
import { isUndefined } from './lib'

type Bearing = number
type Pitch = number

export function useMapOrientation(
  mapId: string,
  trackPitch: boolean
): [Bearing, Pitch] {
  const { [mapId]: map } = useMap()

  const [bearing, setBearing] = useState(map?.getBearing() ?? 0)
  const [pitch, setPitch] = useState(map?.getPitch() ?? 0)

  useEffect(() => {
    if (isUndefined(map)) {
      return
    }

    const handleRotate = () => setBearing(-map.getBearing())

    map.on('rotate', handleRotate)
    return () => {
      map.off('rotate', handleRotate)
    }
  }, [map])

  useEffect(() => {
    if (isUndefined(map) || !trackPitch) {
      return
    }

    const handlePitch = () => setPitch(map.getPitch())

    map.on('pitch', handlePitch)
    return () => {
      map.off('pitch', handlePitch)
    }
  }, [map, trackPitch])

  return [bearing, pitch]
}
