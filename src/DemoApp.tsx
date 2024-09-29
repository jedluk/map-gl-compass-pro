import 'maplibre-gl/dist/maplibre-gl.css'
import './index.css'

import { useState } from 'react'
import Compass from './Compass'
import { NavigationControl } from 'react-map-gl'
import Map from 'react-map-gl/maplibre'

type CompassSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export function DemoApp() {
  const [compassSize, setCompassSize] = useState<CompassSize>('md')
  const [displayDirection, setDisplayDirection] = useState(true)

  const predefinedSizes: CompassSize[] = ['xs', 'sm', 'md', 'lg', 'xl']

  return (
    <Map style={{ width: '100%', height: '100vh' }} mapStyle="/mapStyle.json">
      <Compass size={compassSize} displayDirection={displayDirection} />
      <div className="panel">
        <select
          defaultValue="md"
          onChange={({ target }) => setCompassSize(target.value as CompassSize)}
        >
          {predefinedSizes.map((size) => (
            <option key={size} value={size}>
              size: {size}
            </option>
          ))}
        </select>
        <select
          defaultValue={1}
          onChange={({ target: { value } }) => setDisplayDirection(!!value)}
        >
          <option value="1">cardinal directions</option>
          <option value="">needle</option>
        </select>
      </div>
      <NavigationControl position="top-right" />
    </Map>
  )
}
