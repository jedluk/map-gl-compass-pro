import { CompassProps } from 'maplibre-compass-pro';
import { ControlPosition } from 'maplibre-gl';

declare function CompassComponent(props: CompassProps & {
    position?: ControlPosition;
}): null;
export default CompassComponent;

export { }
