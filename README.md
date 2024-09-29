# map-gl-compass-pro  [![npm](https://img.shields.io/npm/v/map-gl-compass-pro.svg)](https://www.npmjs.com/package/map-gl-compass-pro) [![npm downloads](https://img.shields.io/npm/dm/map-gl-compass-pro.svg)](https://www.npmjs.com/package/map-gl-compass-pro)
OFFICIAL WRAPPER FOR [maplibre-compass-pro](https://github.com/jedluk/maplibre-compass-pro)

![Screen](https://github.com/jedluk/maplibre-compass-pro/blob/main/demo.png?raw=true)

## [LIVE DEMO](https://codesandbox.io/p/sandbox/peaceful-mirzakhani-tv38ck)

## Usage
See [Demo App component](./src/DemoApp.tsx) to get detailed overview how to embed component in react-map-gl based project.

Component props:
```typescript
type CompassProps = {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    displayDirection?: boolean;
    visualizePitch?: boolean;
    onClick?: () => void;
};
```
⚒️⚒️⚒️
```javascript
import 'maplibre-gl/dist/maplibre-gl.css'
import 'map-gl-compass-pro/dist/style.css'

import MapGL from 'react-map-gl/maplibre'
import Compass from 'maplibre-compass-pro'
import { useState } from 'react'

export function DemoApp() {
	const [compassSize, setCompassSize] = useState('md')
	const [displayDirection, setDisplayDirection] = useState(true)

	return (
		<MapGL
			style={{ width: '100%', height: '100vh' }}
			mapStyle="/<your_map_style>.json"
		>
			<Compass size={compassSize} displayDirection={displayDirection} />
		</MapGL>
	)
}
```

Please make sure that:
- compass is child of MapGL component;
- compass styles are imported in entrypoint;
  
Up to date react-map-gl setup available [here](https://visgl.github.io/react-map-gl/docs/get-started)

Enjoy 🗺️🧭
