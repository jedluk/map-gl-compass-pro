import React from 'react'
interface CompassProps {
  mapId?: string
  size?: 'sm' | 'md' | 'lg'
  visualizePitch?: boolean
  wrapperClass?: string
  onNeedleClick?: () => void
}
declare function Compass(props: CompassProps): React.JSX.Element
export default Compass
