import { ControlPosition } from 'maplibre-gl';
import { CompassProps } from 'maplibre-compass-pro';

export default function CompassComponent(props: CompassProps & {
    position?: ControlPosition;
}): null;
