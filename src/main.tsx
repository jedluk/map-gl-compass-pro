import 'maplibre-gl/dist/maplibre-gl.css'
import './index.css'
import { CompassProps } from 'maplibre-compass-pro'
import React, { useState } from 'react'
import Compass from './Compass'
import { createRoot } from 'react-dom/client'
import maplibre from 'maplibre-gl'
import { Map } from 'react-map-gl'

function App() {
  const [size, setSize] = useState<CompassProps['size']>('md')
  const [displayDirection, setDisplayDirection] = useState(true)

  return (
    <Map
      // @ts-expect-error xyz
      mapLib={maplibre}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{ width: '100%', height: '100vh' }}
      mapStyle="/mapStyle.json"
    >
      <Compass size={size} displayDirection={displayDirection} />
      <div className="panel">
        <select
          defaultValue="md"
          onChange={({ target: { value } }) =>
            setSize(value as CompassProps['size'])
          }
        >
          {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
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
    </Map>
  )
}

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
