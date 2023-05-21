# map-gl-compass-pro
New generation maps require new generation tools! 

![Screen](https://raw.githubusercontent.com//jedluk/random/master/compass-pro/compass.png)


## Usage
As for now map-gl-compass-pro works only with react & react-map-gl (react-map-gl is peer dependency). If community will express will of using it with raw mapbox / maplibre library I will add some wrapper around this component.

```sh
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
          mapId="myMap" // optional: default current [read more](https://visgl.github.io/react-map-gl/docs/api-reference/map#id)
          size="lg" // default: 'md', one of 'sm' | 'md' | 'lg'
          visualizePitch={true} // optional: default false
          onNeedleClick={() => doSth()} // optional: set pitch & bearing to 0
          wrapperClass="className" // optional, default placement is bottom left corner (absolutely positioned)
        />
      (...)    
      </MapGL>
    );
}

```