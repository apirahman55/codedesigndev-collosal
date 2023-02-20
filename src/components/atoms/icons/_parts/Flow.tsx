import { ReactComponent as Icon } from '@assets/icons/flow.svg';
import { forwardRef, ComponentProps, memo } from 'react';
const Flow = forwardRef<SVGSVGElement, ComponentProps<'svg'>>((props, ref) => {
  return <Icon ref={ref} {...props} />;
});

export default memo(Flow);
