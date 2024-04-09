import 'maplibre-gl/dist/maplibre-gl.css'
import './index.css'
import React from 'react'
import Compass from './Compass'
import ReactDOM from 'react-dom/client'
import maplibre from 'maplibre-gl'
import { Map } from 'react-map-gl'

function App() {
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
      <Compass size="md" displayDirection />
    </Map>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
