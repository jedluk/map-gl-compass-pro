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

import Map from 'react-map-gl/maplibre'
import Compass from 'maplibre-compass-pro'
import { useState } from 'react'

export function DemoApp() {
	const [compassSize, setCompassSize] = useState('md')
	const [displayDirection, setDisplayDirection] = useState(true)

	return (
		<Map
			style={{ width: '100%', height: '100vh' }}
			mapStyle="/<your_map_style>.json"
		>
			<Compass size={compassSize} displayDirection={displayDirection} />
		</Map>
	)
}
```

Please make sure that Compass is child of MapGL, otherwise it won't work 🙏🙏🙏. 
