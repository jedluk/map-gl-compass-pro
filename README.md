# map-gl-compass-pro  [![npm](https://img.shields.io/npm/v/map-gl-compass-pro.svg)](https://www.npmjs.com/package/map-gl-compass-pro) [![npm downloads](https://img.shields.io/npm/dm/map-gl-compass-pro.svg)](https://www.npmjs.com/package/map-gl-compass-pro)
New generation maps require new generation tools! 

![Screen](https://raw.githubusercontent.com//jedluk/random/master/compass-pro/compass.png)

## [Example implementation](https://jedluk.github.io/hexifier/)

## Usage
As for now map-gl-compass-pro works only with react & react-map-gl (react-map-gl is peer dependency). If community will express will of using it with raw mapbox / maplibre library I will add some wrapper around this component.

```javascript
import MapGL from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import CompassPro from 'map-gl-compass-pro'

function Map(){

  (...)

  return (
      <MapGL
        initialViewState={{
          longitude: -14.5580,
          latitude: 53.4441,
          zoom: 14
        }}
        mapLib={maplibregl}
        mapStyle="https://my-domain.com/mapStyle.json"
      >
        <CompassPro 
          mapId="myMap" // optional, default: current
          size="lg" // optional, one of 'sm' | 'md' | 'lg', default: 'md', 
          visualizePitch={true} // optional, default false
          onNeedleClick={handleNeedleClick} // optional, default set pitch & bearing to 0
          wrapperClass="ownClassName" // optional, default absolutely positioned in bottom left corner
        />
      (...)    
      </MapGL>
    );
}
```
Please make sure that Compass is child of MapGL, otherwise it won't work. Also read more about [react-map-gl setup](https://visgl.github.io/react-map-gl/docs/get-started/get-started) and [mapId](https://visgl.github.io/react-map-gl/docs/api-reference/map#id).
